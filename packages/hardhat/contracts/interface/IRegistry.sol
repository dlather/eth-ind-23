// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

// Use to store contests addrses allowed for the template name
interface IRegistry {
	function getConfig(
		string memory _key,
		string memory _name
	) external view returns (bytes memory);

	function setConfig(
		string memory _key,
		string memory _name,
		bytes memory _data
	) external returns (bool);
}
