// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

interface IBaseContest {
	function placeBet(
		address _operatorAddress,
		bytes memory _data
	) external payable returns (bool, bytes32);
}
