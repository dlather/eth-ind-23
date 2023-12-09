// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.16;
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "../interface/IBaseContest.sol";
import "../interface/ILocator.sol";
import "../common/Constants.sol";
import "../interface/IOperator.sol";
import "../interface/IProvider.sol";

// Currently have single intance for each contest, 2 spots if filled then done
// TODO: Need subgraph to track BetPlaceDEventto track all the contests that a user joins

contract BaseOptionsContest is ReentrancyGuard, Initializable, IBaseContest {
	// Its duplicate
	struct PointRecord {
		bytes32 id;
		uint points;
	}
	struct ContestData {
		bytes32 dataId;
		address contestAddress;
		bytes32 id;
		uint count;
		bytes32[] validIds;
		uint fee;
		// address currency; // Only base currency for now
		uint spots;
		// Bet can be placed if now < stopTimeStamp and data is not resolved
		uint64 stopTimeStamp; // time when no bets can be placed on it
	}
	struct BetsPlaced {
		bytes32 betId;
		bytes32[] optionsSelected;
		address userAddress;
		address operatorAddress;
	}
	event BetPlacedEvent(
		address indexed userAddress,
		address indexed contestAddress
	);
	ILocator locator;
	ContestData contestData;
	mapping(address => uint) public winnings;
	mapping(bytes32 => BetsPlaced) betsPlaced;
	bytes32[] betsPlacedIds;
	bool public winnersResolved;
	mapping(bytes32 => uint) optionPoints;

	struct CompleteContestData {
		bool winnersResolved;
		CompleteDataContest[] data;
	}

	struct CompleteDataContest {
		uint winning;
		BetsPlaced betPlaced;
	}

	function getCompleteContestData()
		public
		view
		returns (CompleteContestData memory _completeContestData)
	// returns (CompleteDataContest[] memory _data, bool _winnersResolved)
	{
		CompleteDataContest[] memory _data = new CompleteDataContest[](
			betsPlacedIds.length
		);
		for (uint i; i < betsPlacedIds.length; i++) {
			_data[i] = CompleteDataContest({
				winning: winnings[betsPlaced[betsPlacedIds[i]].userAddress],
				betPlaced: betsPlaced[betsPlacedIds[i]]
			});
		}
		bool _winnersResolved = winnersResolved;
		_completeContestData = CompleteContestData({
			winnersResolved: _winnersResolved,
			data: _data
		});
	}

	function initialize(
		ContestData memory _contestData,
		ILocator _locator
	) public initializer {
		contestData = _contestData;
		locator = _locator;
	}

	function getContestData() public view returns (ContestData memory) {
		return contestData;
	}

	function placeBet(
		address _operatorAddress,
		bytes memory _data
	) external payable override nonReentrant returns (bool, bytes32) {
		require(msg.value == contestData.fee, "Fee Mismatch");
		require(
			betsPlacedIds.length < contestData.spots,
			"Contest is already full"
		);
		require(block.timestamp < contestData.stopTimeStamp, "Time Over");
		bytes32[] memory _optionsSelected = abi.decode(_data, (bytes32[]));
		require(_optionsSelected.length == contestData.count, "Count Mismatch");
		require(areAllOptionsValid(_optionsSelected), "Invalid Options Found");
		bool _canPlaceBet = IProvider(
			locator.getAddress(Constants.CONTRACT, Constants.Provider)
		).validatePlaceBet(contestData.dataId);
		require(_canPlaceBet, "Cannot Place Bet now");
		IOperator.Fee memory _operatorFee = IOperator(
			locator.getAddress(Constants.CONTRACT, Constants.Operators)
		).getOperatorFee(_operatorAddress, contestData.id);
		require(_operatorFee.fee != 0, "Invalid Operator Used");
		bytes32 _betId = keccak256(
			abi.encodePacked(
				msg.sender,
				betsPlacedIds.length,
				_optionsSelected,
				block.timestamp
			)
		);
		betsPlaced[_betId] = BetsPlaced({
			betId: _betId,
			optionsSelected: _optionsSelected,
			userAddress: msg.sender,
			operatorAddress: _operatorAddress
		});
		betsPlacedIds.push(_betId);
		emit BetPlacedEvent(msg.sender, address(this));
		return (true, _betId);
	}

	// TODO: Need to rethink, Provider should initiate, call template factories resolve for thet data ids
	function resolveContest() public nonReentrant returns (bool) {
		IProvider _provider = IProvider(
			locator.getAddress(Constants.CONTRACT, Constants.Provider)
		);
		(bool _success, bytes memory _resolvedData) = _provider.getResolvedData(
			contestData.dataId
		);
		require(_success, "Data Not resolved till now");
		PointRecord[] memory _optionPoints = abi.decode(
			_resolvedData,
			(PointRecord[])
		);
		if (!winnersResolved) {
			// Init option id to points
			for (uint i; i < _optionPoints.length; i++) {
				optionPoints[_optionPoints[i].id] = _optionPoints[i].points;
			}
			PointRecord[] memory _betIdPoints = new PointRecord[](
				betsPlacedIds.length
			);
			// Find points scored by each bet
			for (uint j; j < betsPlacedIds.length; j++) {
				bytes32[] memory _optionsSelected = betsPlaced[betsPlacedIds[j]]
					.optionsSelected;
				uint _netScore = 0;
				for (uint k; k < _optionsSelected.length; k++) {
					_netScore = _netScore + optionPoints[_optionsSelected[k]];
				}
				_betIdPoints[j] = PointRecord({
					id: betsPlacedIds[j],
					points: _netScore
				});
			}
			// Find max points scored by bets
			uint _maxPoints = 0;
			for (uint l; l < _betIdPoints.length; l++) {
				if (_betIdPoints[l].points > _maxPoints) {
					_maxPoints = _betIdPoints[l].points;
				}
			}
			// Get Winners list now whose points equal max points
			// win1,0,0,0,win2,0,0,0,0,0,win3,0,0
			bytes32[] memory _winningBets = new bytes32[](_betIdPoints.length);
			uint _winnersCount = 0;
			for (uint l; l < _betIdPoints.length; l++) {
				if (_betIdPoints[l].points == _maxPoints) {
					_winningBets[l] = _betIdPoints[l].id;
					_winnersCount++;
				}
			}
			uint _totalWinnngAmount = address(this).balance <
				contestData.fee * betsPlacedIds.length
				? address(this).balance
				: contestData.fee * betsPlacedIds.length;
			// Get Provider Fee data
			(
				uint _providerFee,
				uint _providerDecimals,
				address _providerAddress
			) = IProvider(
					locator.getAddress(Constants.CONTRACT, Constants.Provider)
				).getProviderFee(contestData.dataId);
			uint _eachWinnerWinningAmount = _totalWinnngAmount / _winnersCount;
			uint _userNetWinning = _eachWinnerWinningAmount - contestData.fee;
			// Calculate wins and update balances
			for (uint m; m < _winningBets.length; m++) {
				if (_winningBets[m] != bytes32(0)) {
					BetsPlaced memory _winnerBetData = betsPlaced[
						_winningBets[m]
					];
					address _userAddress = _winnerBetData.userAddress;
					address _operatorAddress = _winnerBetData.operatorAddress;

					uint _providerWinning = (_userNetWinning * _providerFee) /
						_providerDecimals;
					IOperator.Fee memory _operatorFee = IOperator(
						locator.getAddress(
							Constants.CONTRACT,
							Constants.Operators
						)
					).getOperatorFee(_operatorAddress, contestData.id);
					uint _operatorWinning = (_userNetWinning *
						_operatorFee.fee) / _operatorFee.decimals;
					uint _userWinningsLeft = _eachWinnerWinningAmount -
						_providerWinning -
						_operatorWinning;

					winnings[_providerAddress] += _providerWinning;
					winnings[_operatorAddress] += _operatorWinning;
					winnings[_userAddress] += _userWinningsLeft;
				}
			}
			winnersResolved = true;
			return true;
		}
		return true;
	}

	// ----- Utils -------

	// Need to check Validity and no duplicates
	function areAllOptionsValid(
		bytes32[] memory _optionsSelected
	) public view returns (bool) {
		for (uint i; i < _optionsSelected.length; i++) {
			bool _isPresent = false;
			for (uint j; j < contestData.validIds.length; j++) {
				if (_optionsSelected[i] == contestData.validIds[j]) {
					_isPresent = true;
					break;
				}
			}
			require(_isPresent, "Invalid Options Selected");
			bool _isUnique = true;
			for (uint k = i + 1; k < _optionsSelected.length; k++) {
				if (_optionsSelected[i] == _optionsSelected[k]) {
					_isUnique = false;
					break;
				}
			}
			require(_isUnique, "Duplicate Option Id found");
		}
		return true;
	}

	function encode(bytes32[] memory _ids) public pure returns (bytes memory) {
		return abi.encode(_ids);
	}

	function withdrawWinningAmount() external payable nonReentrant {
		require(winnings[msg.sender] > 0, "No Winning found");
		winnings[msg.sender] = 0;
		(bool sent, ) = payable(msg.sender).call{ value: msg.value }("");
		require(sent, "Failed to send Ether");
	}
}
