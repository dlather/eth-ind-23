// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.16;

interface ITemplate {
	function configureTemplate(
		bytes32 _dataId,
		bytes memory _data
	) external returns (bool);

	function getConfiguredTemplate(
		bytes32 _dataId
	) external returns (bytes memory _data);

	function generateClaimData(
		bytes32 _dataId,
		bytes memory _data
	) external returns (bytes memory _assertionData);
}
