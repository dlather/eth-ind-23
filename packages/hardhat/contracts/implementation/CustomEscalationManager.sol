// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@uma/core/contracts/optimistic-oracle-v3/implementation/escalation-manager/BaseEscalationManager.sol";

contract CustomEscalationManager is BaseEscalationManager, Ownable {
	address immutable assertingCaller; // TODO: Do we really need to limit based on asserting caller
	struct CustomEscalationData {
		address providerAddress;
		uint64 endTimeStamp;
	}
	event CustomEscalationDataAdded(
		bytes32 indexed dataId,
		address indexed providerAddress,
		uint64 indexed endTimeStamp
	);
	mapping(bytes32 => CustomEscalationData) public escalationDataMap; // dataId => {initial provider address, endtimestamp}

	constructor(
		address _optimisticOracleV3
	) BaseEscalationManager(_optimisticOracleV3) {
		assertingCaller = msg.sender;
	}

	// only Owner, ie provider contract can call it
	function setEscalationDataMap(
		bytes32 _dataId,
		address _providerAddress,
		uint64 _endTimeStamp
	) public onlyOwner returns (bool) {
		escalationDataMap[_dataId] = CustomEscalationData({
			providerAddress: _providerAddress,
			endTimeStamp: _endTimeStamp
		});
		emit CustomEscalationDataAdded(
			_dataId,
			_providerAddress,
			_endTimeStamp
		);
		return true;
	}

	function getAssertionPolicy(
		bytes32 assertionId
	) public view override returns (AssertionPolicy memory) {
		OptimisticOracleV3Interface.Assertion
			memory _assertion = optimisticOracleV3.getAssertion(assertionId);
		address _assertingCaller = _assertion
			.escalationManagerSettings
			.assertingCaller;
		if (assertingCaller == _assertingCaller) {
			bytes32 _dataId = _assertion.domainId; // Domain Id equals data Id
			uint64 _assertionTime = _assertion.assertionTime;
			uint64 _endTimeStamp = escalationDataMap[_dataId].endTimeStamp;
			if (_assertionTime < _endTimeStamp) {
				address _asserter = _assertion.asserter;
				address _providerAddress = escalationDataMap[_dataId]
					.providerAddress;
				bool _asserterIsProvider = _asserter == _providerAddress;
				return
					AssertionPolicy({
						blockAssertion: !_asserterIsProvider,
						arbitrateViaEscalationManager: false,
						discardOracle: false,
						validateDisputers: false
					});
			} else {
				return
					AssertionPolicy({
						blockAssertion: false,
						arbitrateViaEscalationManager: false,
						discardOracle: false,
						validateDisputers: false
					});
			}
		} else {
			return
				AssertionPolicy({
					blockAssertion: true,
					arbitrateViaEscalationManager: false,
					discardOracle: false,
					validateDisputers: false
				});
		}
	}
}
