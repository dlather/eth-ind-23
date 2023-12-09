// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

interface IContestFactory {
	function addContest(
		bytes32 _dataId,
		bytes memory _data
	) external returns (bool, bytes32);
}
