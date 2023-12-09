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

contract OptionsProviderTemplate is ITemplate {
	struct PointRecord {
		bytes32 id;
		uint points;
	}
	struct BaseOption {
		string name;
		string symbol;
		string ipfsHash;
	}
	struct Option {
		bytes32 id;
		string name;
		string symbol;
		string ipfsHash;
	}

	ILocator immutable locator;
	mapping(bytes32 => Option[]) optionsMap; // dataId => Array of Options
	mapping(bytes32 => mapping(bytes32 => bool)) validOptions; // dataId => optionId => true/false

	constructor(ILocator _locator) {
		locator = _locator;
	}

	// Need to compute scorecard from provider data and then leaderboard for contests

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
		PointRecord[] memory _pointRecords = abi.decode(_data, (PointRecord[]));
		string memory _assertionData = "[";
		for (uint i = 0; i < _pointRecords.length; i++) {
			bytes32 _id = _pointRecords[i].id;
			string memory _optionName;
			Option[] memory _options = optionsMap[_dataId];
			for (uint j; j < _options.length; j++) {
				if (_options[i].id == _id) {
					_optionName = _options[i].name;
				}
			}
			require(validOptions[_dataId][_id], "Invalid Option Id");
			_assertionData = string(
				abi.encodePacked(
					_assertionData,
					"{",
					_optionName,
					":",
					ClaimData.toUtf8BytesUint(_pointRecords[i].points),
					"}"
				)
			);
			if (i < _pointRecords.length - 1) {
				_assertionData = string(abi.encodePacked(_assertionData, ", "));
			}
		}
		_assertionData = string(abi.encodePacked(_assertionData, "]"));

		return
			abi.encodePacked(
				_assertionData,
				" for dataId: 0x", // in the example dataId is type bytes32 so we add the hex prefix 0x.
				ClaimData.toUtf8Bytes(_dataId)
			);
	}

	function getConfiguredTemplate(
		bytes32 _dataId
	) external view override returns (bytes memory _data) {
		Option[] memory _options = optionsMap[_dataId];
		_data = abi.encode(_options);
	}

	function configureTemplate(
		bytes32 _dataId,
		bytes memory _data
	) external override onlyProvider returns (bool) {
		BaseOption[] memory _baseOption = abi.decode(_data, (BaseOption[]));
		_addOptions(_dataId, _baseOption);
		return true;
	}

	// --------- Private functions ----------------

	function _addOptions(
		bytes32 _dataId,
		BaseOption[] memory _baseData
	) private returns (bool) {
		if (_baseData.length > 0) {
			Option[] memory _options = new Option[](_baseData.length);
			for (uint i; i < _baseData.length; i++) {
				bytes32 _id = keccak256(
					abi.encodePacked(
						_baseData[i].name,
						_baseData[i].symbol,
						_baseData[i].ipfsHash
					)
				);

				_options[i] = Option({
					id: _id,
					name: _baseData[i].name,
					symbol: _baseData[i].symbol,
					ipfsHash: _baseData[i].ipfsHash
				});
				validOptions[_dataId][_id] = true;
			}
			optionsMap[_dataId] = _options;
		}
		return true;
	}

	// -----------UTILS------------

	function encode(
		BaseOption[] calldata _baseOption
	) public pure returns (bytes memory) {
		return (abi.encode(_baseOption));
	}

	function encodeAssertData(
		PointRecord[] memory _pointRecords
	) public pure returns (bytes memory) {
		return abi.encode(_pointRecords);
	}

	function decode(
		bytes memory data
	) public pure returns (Option[] memory _baseOption) {
		(_baseOption) = abi.decode(data, (Option[]));
	}

	function areUnique(bytes32[] memory _data) public pure returns (bool) {
		for (uint i; i < _data.length; i++) {
			bytes32 _temp = _data[i];
			for (uint j = i + 1; j < _data.length; j++) {
				if (_data[j] == _temp) {
					return false;
				}
			}
		}
		return true;
	}
}
