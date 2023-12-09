// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import "hardhat/console.sol";
import "@uma/core/contracts/optimistic-oracle-v3/implementation/ClaimData.sol";
import "../interface/ILocator.sol";
import "../common/Constants.sol";
import "hardhat/console.sol";
import "../implementation/Provider.sol";
import "../interface/ITemplate.sol";

// TODO: No need to have option groups, have a list of options only
// Have 2 questions for Will India win CWC 2023 ? with oprions as Yes and No, then give each option a point, like 1 to Yes and 0 to No if India wins
// Players Points data for India va Pak, each player all 30 or 40 will have points given as 20,90,0,0,....

contract YesNoProviderTemplate is ITemplate {
	struct PointRecord {
		bytes32 id;
		uint points;
	}
	struct IdName {
		bytes32 id;
		string name;
	}
	ILocator immutable locator;
	string public constant yes = "Yes";
	string public constant no = "No";
	IdName public yesIdName =
		IdName({ id: keccak256(abi.encodePacked(yes)), name: yes });
	IdName public noIdName =
		IdName({ id: keccak256(abi.encodePacked(no)), name: no });
	mapping(bytes32 => bool) configuredDataIds; // dataId => configured

	constructor(ILocator _locator) {
		locator = _locator;
	}

	modifier onlyProvider() {
		address _providerAddress = locator.getAddress(
			Constants.CONTRACT,
			Constants.Provider
		);
		require(msg.sender == _providerAddress, "Only Provider can access");
		_;
	}

	// func that should be used by provider to correctly generate assertion claim
	function generateClaimData(
		bytes32 _dataId,
		bytes memory _data
	) external view override onlyProvider returns (bytes memory) {
		PointRecord[] memory _claimedPointRecord = abi.decode(
			_data,
			(PointRecord[])
		);
		require(_claimedPointRecord.length == 1, "Array should have length 1");
		require(
			_claimedPointRecord[0].id == yesIdName.id ||
				_claimedPointRecord[0].id == noIdName.id,
			"Id should ne one of yes or no"
		);
		string memory _claimedOption;
		if (_claimedPointRecord[0].id == yesIdName.id) {
			_claimedOption = yes;
		} else {
			_claimedOption = no;
		}
		return
			abi.encodePacked(
				_claimedOption,
				" for dataId: 0x", // in the example dataId is type bytes32 so we add the hex prefix 0x.
				ClaimData.toUtf8Bytes(_dataId)
			);
	}

	// Need id name because using common baseoptionscontest and it need ids
	function getConfiguredTemplate(
		bytes32 _dataId
	) external view override returns (bytes memory _data) {
		if (configuredDataIds[_dataId] == true) {
			_data = abi.encode(yesIdName, noIdName);
		}
	}

	// TODO: add modifier onlyProvider
	function configureTemplate(
		bytes32 _dataId,
		bytes memory _data
	) external override returns (bool) {
		configuredDataIds[_dataId] = true;
		return true;
	}

	// --------- Private functions ----------------

	// -----------UTILS------------

	function areEqual(
		string memory str1,
		string memory str2
	) public pure returns (bool) {
		if (bytes(str1).length != bytes(str2).length) {
			return false;
		}
		return
			keccak256(abi.encodePacked(str1)) ==
			keccak256(abi.encodePacked(str2));
	}

	function encodeAssertData(
		string memory _claimedOption
	) public view returns (bytes memory) {
		require(
			areEqual(_claimedOption, yes) || areEqual(_claimedOption, no),
			"Invalid Option Encode Assert"
		);
		PointRecord[] memory _pointRecords = new PointRecord[](1);
		if (areEqual(_claimedOption, yes)) {
			// TODO: Check if baseoptioncontest can hendle pointrecord with not all present
			_pointRecords[0] = PointRecord({ id: yesIdName.id, points: 1 });
		} else {
			_pointRecords[0] = PointRecord({ id: noIdName.id, points: 1 });
		}
		return abi.encode(_pointRecords);
	}

	function decode(
		bytes memory data
	) public pure returns (IdName[] memory _data) {
		IdName memory a;
		IdName memory b;
		_data = new IdName[](2);
		(a, b) = abi.decode(data, (IdName, IdName));
		_data[0] = a;
		_data[1] = b;
	}
}
