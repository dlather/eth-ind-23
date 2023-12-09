// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

interface IProvider {
	function getResolvedData(
		bytes32 _dataId
	) external view returns (bool, bytes memory);

	function isDataAsserted(
		bytes32 _dataId
	) external view returns (bool);

	function getProviderFee(
		bytes32 _dataId
	) external view returns (uint fee, uint decimals, address _providerAddress);

	function validatePlaceBet(bytes32 _dataId) external view returns (bool);

	function getDataIdTemplate(
		bytes32 _dataId
	) external view returns (string memory _template);
}
