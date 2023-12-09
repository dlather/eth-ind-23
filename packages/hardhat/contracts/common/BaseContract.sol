// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import "../interface/IError.sol";
import "../interface/ILocator.sol";
import "./Constants.sol";

abstract contract BaseContract is IError {
	ILocator locatorInterface;

	constructor(ILocator _locatorInterface) {
		locatorInterface = _locatorInterface;
	}

	function isValidKey(bytes32 _key) public view virtual returns (bool);

	function areValidKeys(
		bytes32[] memory _keys
	) public view virtual returns (bool);

	modifier notEmpty(string memory x) {
		require(bytes(x).length > 0, "Empty Value not allowed");
		_;
	}

	modifier notEmptyList(string[] memory x) {
		for (uint i; i < x.length; i++) {
			require(bytes(x[i]).length > 0, "Empty Value not allowed");
		}
		_;
	}

	modifier validateTimestamps(uint _startTimeStamp, uint _endTimeStamp) {
		require(
			_startTimeStamp < _endTimeStamp,
			"Start Time shoud be greater than end timestamp"
		);
		require(
			_startTimeStamp > block.timestamp,
			"Start time stamp should be greater then now"
		);
		_;
	}
}
