// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.16;

interface IOperator {
	struct Fee {
		uint fee;
		uint decimals;
	}

	function getAllContests(
		address _operatorAddress
	) external view returns (bytes32[] memory _contestIds);

	function getOperatorFee(
		address _operatorAddress,
		bytes32 _contestId
	) external view returns (Fee memory);

	function setOperatorFee(
		bytes32 _contestId,
		Fee memory _fee
	) external returns (bool);
}
