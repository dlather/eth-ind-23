// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/access/Ownable2Step.sol";
import "hardhat/console.sol";
import "../interface/ILocator.sol";
import "hardhat/console.sol";

/**
 * @title Provides addresses of the live contracts implementing certain interfaces.
 */
contract Locator is ILocator, Ownable2Step {
	using EnumerableSet for EnumerableSet.Bytes32Set;
	struct KeyNameStruct {
		string key;
		string[] names;
	}
	mapping(bytes32 => mapping(bytes32 => address)) public implementations; // key => mapping(hash of name => address)
	mapping(bytes32 => string) keyNameMap; // bytes32 => string name
	EnumerableSet.Bytes32Set private keyIds;
	EnumerableSet.Bytes32Set private nameIds;

	event ImplementationChanged(
		string indexed key,
		string indexed name,
		address indexed newAddress
	);

	function getData() public view returns (KeyNameStruct[] memory _data) {
		bytes32[] memory _keyIds = keyIds.values();
		bytes32[] memory _nameIds = nameIds.values();
		_data = new KeyNameStruct[](_keyIds.length);
		string[] memory _temp = new string[](_nameIds.length);
		for (uint i; i < _keyIds.length; i++) {
			for (uint j; j < _nameIds.length; j++) {
				_temp[j] = keyNameMap[_nameIds[j]];
			}
			_data[i] = KeyNameStruct({
				key: keyNameMap[_keyIds[i]],
				names: _temp
			});
		}
	}

	function changeAddress(
		string memory _key,
		string memory _name,
		address _address
	) external override onlyOwner {
		bytes32 _keyId = keccak256(abi.encode(_key));
		bytes32 _nameId = keccak256(abi.encode(_name));
		keyIds.add(_keyId);
		nameIds.add(_nameId);
		keyNameMap[_keyId] = _key;
		keyNameMap[_nameId] = _name;
		implementations[_keyId][_nameId] = _address;
		emit ImplementationChanged(_key, _name, _address);
	}

	function getAddress(
		string memory _key,
		string memory _name
	) external view override returns (address) {
		bytes32 _keyId = keccak256(abi.encode(_key));
		bytes32 _nameId = keccak256(abi.encode(_name));
		address _implementationAddress = implementations[_keyId][_nameId];
		require(
			_implementationAddress != address(0x0),
			"Implementation not found"
		);
		return _implementationAddress;
	}
}
