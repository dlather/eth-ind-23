// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import "@openzeppelin/contracts/proxy/Clones.sol";
import "../common/Constants.sol";
import "../interface/ILocator.sol";
import "../interface/IContestFactory.sol";
import "../interface/ITemplate.sol";
import "../template/OptionsProviderTemplate.sol";
import "../baseContests/BaseOptionsContest.sol";

contract OptionsContestFactory is IContestFactory {
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

	function addContest(
		bytes32 _dataId,
		bytes memory _data
	) external returns (bool, bytes32) {
		// TODO: Check if provider data asserted or resolved, dont allow then
		(
			uint _count, // number of items to choose
			bytes32[] memory _ids,
			uint _fee,
			// address _currency,
			uint _spots,
			uint64 _stopTimeStamp
		) = abi.decode(_data, (uint, bytes32[], uint, uint, uint64));
		require(_count > 0, "Invalid Count");
		require(_ids.length > 0, "Invalid Ids");
		require(_count <= _ids.length, "Count less than total options");
		require(
			_stopTimeStamp > block.timestamp,
			"Contest Stop Time should be greater than now"
		);
		IProvider _provider = IProvider(
			locator.getAddress(Constants.CONTRACT, Constants.Provider)
		);
		require(!_provider.isDataAsserted(_dataId), "Provider Data already asserted");
		ITemplate _template = ITemplate(
			locator.getAddress(
				Constants.TEMPLATE,
				Constants.OPTIONS_PROVIDER_TEMPLATE
			)
		);
		bytes memory _templateData = _template.getConfiguredTemplate(_dataId);
		OptionsProviderTemplate.Option[] memory _options = abi.decode(
			_templateData,
			(OptionsProviderTemplate.Option[])
		);
		bytes32[] memory _validOptionsIds = new bytes32[](_options.length);
		for (uint i; i < _options.length; i++) {
			_validOptionsIds[i] = _options[i].id;
		}
		bytes32 _id = keccak256(
			abi.encodePacked(_dataId, _count, _ids, _fee, _spots)
		);
		require(
			address(contests[_id].contestAddress) == address(0x0),
			"Contest already exists"
		);
		for (uint i; i < _ids.length; i++) {
			require(isPresent(_ids[i], _validOptionsIds), "Invalid Option Id");
			bytes32 _temp = _ids[i];
			for (uint j = i + 1; j < _ids.length; j++) {
				if (_ids[j] == _temp) {
					revert("Ids Not unique");
				}
			}
		}
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
				count: _count,
				validIds: _ids,
				fee: _fee,
				// currency: _currency,
				spots: _spots,
				stopTimeStamp: _stopTimeStamp
			}),
			locator
		);
		dataIdContestsMap[_dataId].push(_id);
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
		uint _count, // number of items to choose
		bytes32[] memory _ids,
		uint _fee,
		uint _spots,
		uint64 _stopTimeStamp
	) public pure returns (bytes memory) {
		return abi.encode(_count, _ids, _fee, _spots, _stopTimeStamp);
	}
}
