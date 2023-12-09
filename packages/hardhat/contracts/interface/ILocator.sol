// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

/**
 * @title Provides addresses of the live contracts implementing certain interfaces.
 * @dev Examples are the Oracle or Store interfaces.
 */
interface ILocator {
	/**
	 * @notice Updates the address of the key that implements name.
	 * @param _key string of key, ex: contract, template, etc
	 * @param _name  name that is either changed or registered ex: Provider, CustomEscalationManager etc
	 * @param _address address of the deployed contract that implements the interface.
	 */
	function changeAddress(
		string memory _key,
		string memory _name,
		address _address
	) external;

	/**
	 * @notice Gets the address of the contract that implements the given `interfaceName`.
	 * @param _key queried key.
	 * @param _name queried name.
	 * @return implementationAddress address of the deployed contract that implements the interface.
	 */
	function getAddress(
		string memory _key,
		string memory _name
	) external view returns (address);
}
