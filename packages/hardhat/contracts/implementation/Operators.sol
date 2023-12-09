// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import "../interface/IOperator.sol";

contract Operators is IOperator {
	mapping(address => mapping(bytes32 => Fee)) operatorFees;
	mapping(address => bytes32[]) contestsByOperator; // operator address => contest id []

	function getAllContests(
		address _operatorAddress
	) external view returns (bytes32[] memory _contestIds) {
		_contestIds = new bytes32[](
			contestsByOperator[_operatorAddress].length
		);
		for (uint i; i < contestsByOperator[_operatorAddress].length; i++) {
			_contestIds[i] = contestsByOperator[_operatorAddress][i];
		}
	}

	function getOperatorFee(
		address _operatorAddress,
		bytes32 _contestId
	) external view returns (Fee memory) {
		return operatorFees[_operatorAddress][_contestId];
	}

	event OperatorAdded(bytes32 indexed contestId, address indexed operator);

	function setOperatorFee(
		bytes32 _contestId,
		Fee memory _fee
	) external returns (bool) {
		require(
			operatorFees[msg.sender][_contestId].fee == 0,
			"Fee already set"
		);
		operatorFees[msg.sender][_contestId] = _fee;
		contestsByOperator[msg.sender].push(_contestId);
		emit OperatorAdded({ contestId: _contestId, operator: msg.sender });
		return true;
	}
}
