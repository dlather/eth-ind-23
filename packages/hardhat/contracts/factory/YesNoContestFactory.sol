// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import "@openzeppelin/contracts/proxy/Clones.sol";
import "../common/Constants.sol";
import "../interface/ILocator.sol";
import "../interface/IContestFactory.sol";
import "../interface/ITemplate.sol";
import "../template/YesNoProviderTemplate.sol";
import "../baseContests/BaseOptionsContest.sol";

contract YesNoContestFactory is IContestFactory {
	struct ContestEssentialData {
		BaseOptionsContest contestAddress;
		bytes32 dataId;
	}
	ILocator immutable locator;
	mapping(bytes32 => ContestEssentialData) contests; // contestId => Contest Address
	mapping(bytes32 => bytes32[]) dataIdContestsMap;
	address immutable baseOptionsContestImplementation;

	constructor(ILocator _locator, address _baseOptionsContestImplementation) {
		locator = _locator;
		baseOptionsContestImplementation = _baseOptionsContestImplementation;
	}

	function getContestAddress(
		bytes32 _contestId
	) public view returns (address) {
		return address(contests[_contestId].contestAddress);
	}

	function getAllContestsDetails(
		bytes32[] memory _contestIds
	)
		external
		view
		returns (ContestEssentialData[] memory _essentialContestData)
	{
		_essentialContestData = new ContestEssentialData[](_contestIds.length);
		for (uint i; i < _contestIds.length; i++) {
			_essentialContestData[i] = contests[_contestIds[i]];
		}
	}

	function getContestsByDataId(
		bytes32 _dataId
	) public view returns (BaseOptionsContest.ContestData[] memory _contests) {
		_contests = new BaseOptionsContest.ContestData[](
			dataIdContestsMap[_dataId].length
		);
		for (uint i; i < dataIdContestsMap[_dataId].length; i++) {
			BaseOptionsContest _baseContest = contests[
				dataIdContestsMap[_dataId][i]
			].contestAddress;
			_contests[i] = _baseContest.getContestData();
		}
	}

	event ContestAdded(
		bytes32 indexed dataId,
		address indexed contestAddress,
		bytes32 indexed contestId
	);

	function addContest(
		bytes32 _dataId,
		bytes memory _data
	) external returns (bool, bytes32) {
		// TODO: Check if provider data asserted or resolved, dont allow then
		(
			uint _fee,
			// address _currency,
			uint _spots,
			uint64 _stopTimeStamp
		) = abi.decode(_data, (uint, uint, uint64));
		require(
			_stopTimeStamp > block.timestamp,
			"Contest Stop Time should be greater than now"
		);
		IProvider _provider = IProvider(
			locator.getAddress(Constants.CONTRACT, Constants.Provider)
		);
		require(
			!_provider.isDataAsserted(_dataId),
			"Provider Data already asserted"
		);
		console.log("d1");
		ITemplate _template = ITemplate(
			locator.getAddress(
				Constants.TEMPLATE,
				Constants.YES_NO_PROVIDER_TEMPLATE
			)
		);
		bytes memory _templateData = _template.getConfiguredTemplate(_dataId);
		console.logBytes(_templateData);
		(
			YesNoProviderTemplate.IdName memory _option1,
			YesNoProviderTemplate.IdName memory _option2
		) = abi.decode(
				_templateData,
				(YesNoProviderTemplate.IdName, YesNoProviderTemplate.IdName)
			);
		console.log("d2");
		bytes32[] memory _validOptionsIds = new bytes32[](2);
		_validOptionsIds[0] = _option1.id;
		_validOptionsIds[1] = _option2.id;
		bytes32 _id = keccak256(
			abi.encodePacked(_dataId, uint(1), _validOptionsIds, _fee, _spots)
		);
		require(
			address(contests[_id].contestAddress) == address(0x0),
			"Contest already exists"
		);
		BaseOptionsContest deployedContest = BaseOptionsContest(
			Clones.clone(baseOptionsContestImplementation)
		);
		contests[_id] = ContestEssentialData({
			contestAddress: deployedContest,
			dataId: _dataId
		});
		contests[_id].contestAddress.initialize(
			BaseOptionsContest.ContestData({
				dataId: _dataId,
				contestAddress: address(contests[_id].contestAddress),
				id: _id,
				count: 1,
				validIds: _validOptionsIds,
				fee: _fee,
				// currency: _currency,
				spots: _spots,
				stopTimeStamp: _stopTimeStamp
			}),
			locator
		);
		dataIdContestsMap[_dataId].push(_id);
		emit ContestAdded({
			dataId: _dataId,
			contestAddress: address(contests[_id].contestAddress),
			contestId: _id
		});
		return (true, _id);
	}

	// -------- Utils ---------
	function isPresent(
		bytes32 _id,
		bytes32[] memory _ids
	) private pure returns (bool) {
		for (uint i; i < _ids.length; i++) {
			if (_ids[i] == _id) {
				return true;
			}
		}
		return false;
	}

	function encode(
		uint _fee,
		uint _spots,
		uint64 _stopTimeStamp
	) public pure returns (bytes memory) {
		return abi.encode(_fee, _spots, _stopTimeStamp);
	}
}
