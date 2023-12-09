// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;
import "hardhat/console.sol";
// -------- UMA ----------
import "@uma/core/contracts/data-verification-mechanism/interfaces/FinderInterface.sol";
import "@uma/core/contracts/optimistic-oracle-v3/interfaces/OptimisticOracleV3Interface.sol";
import "@uma/core/contracts/data-verification-mechanism/implementation/Constants.sol";
import "@uma/core/contracts/common/implementation/AddressWhitelist.sol";
import "@uma/core/contracts/optimistic-oracle-v3/implementation/ClaimData.sol";

// -------- Open Zepplin -------
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable2Step.sol";

// ------- Local --------------
import "./CustomEscalationManager.sol";
import "../common/Constants.sol";
import "../interface/ILocator.sol";
import "../interface/ITemplate.sol";
import "../interface/IProvider.sol";
import "../interface/IContestFactory.sol";

// TODO: Add Image to DataDetails

contract Provider is Ownable2Step, ReentrancyGuard, IProvider {
	using SafeERC20 for IERC20;

	// -------- Data Types --------------

	struct ProviderData {
		address providerAddress;
		uint bond;
		Fee fee;
		uint endTimeStamp; // By When only provider can assert data for
		uint64 assertionLiveness;
		IERC20 currency;
	}

	struct DataDetails {
		bytes32 dataJsonHash;
		string name;
		string imageIpfsHash;
		string description; // May mention source also
		string template;
	}

	struct DataAssertion {
		bytes32 dataId; // The dataId for which assertion is made
		bytes data;
		address asserter; // The address that made the assertion.
		bool resolved; // Whether the assertion has been resolved.
	}

	struct Fee {
		uint fee;
		uint decimals;
	}

	// -------- Events --------------------

	event ProviderAdded(
		bytes32 indexed dataId,
		string name,
		bytes32 indexed dataJsonHash,
		string description,
		Fee fee,
		uint indexed endTimeStamp,
		uint bond,
		address currency,
		address providerAddress,
		uint64 assertionLiveness
	);

	event DataAsserted(
		bytes32 indexed dataId,
		bytes data,
		address indexed asserter,
		bytes32 indexed assertionId
	);

	event DataAssertionResolved(
		bytes32 indexed dataId,
		bytes data,
		address indexed asserter,
		bytes32 indexed assertionId
	);

	struct CompleteData {
		bytes32 dataId;
		DataDetails dataDetails;
		ProviderData providerDetails;
		DataAssertion assertionDetails;
	}

	// -------- Variables ----------------
	ILocator immutable locator;
	FinderInterface public immutable finder; // UMA protocol Finder used to discover other protocol contracts.
	OptimisticOracleV3Interface public immutable oo;
	CustomEscalationManager public immutable escalationManager;
	bytes32 public immutable defaultIdentifier;

	// dataId is different from assertionId, assertion is made for a dataId with some data, which gets posted to UMA for verification
	mapping(bytes32 => DataAssertion) assertionsDataMap; // assertionId => DataAssertion
	mapping(bytes32 => ProviderData) providerMap; // dataId => ProviderData Details
	mapping(bytes32 => DataDetails) dataDetailsMap; // dataId => Data Details
	mapping(bytes32 => bytes32) dataIdAssertionIdMap; // dataId => assertionId map
	bytes32[] dataIdList;

	function validatePlaceBet(
		bytes32 _dataId
	) external view override returns (bool) {
		// Data should not have been asserted and timestamp < endtime
		if (
			block.timestamp > providerMap[_dataId].endTimeStamp ||
			assertionsDataMap[dataIdAssertionIdMap[_dataId]].asserter !=
			address(0x0)
		) {
			return false;
		}
		return true;
	}

	function getAllDataIdDetails()
		public
		view
		returns (CompleteData[] memory _completeData)
	{
		bytes32[] memory _dataIdList = getDataIdList();
		_completeData = new CompleteData[](_dataIdList.length);
		for (uint i; i < _dataIdList.length; i++) {
			_completeData[i] = getDataIdDetails(_dataIdList[i]);
		}
	}

	function getDataIdList() public view returns (bytes32[] memory) {
		return dataIdList;
	}

	// -------- Constructor ------------
	constructor(FinderInterface _finder, ILocator _locator) {
		finder = FinderInterface(_finder);
		locator = _locator;
		oo = OptimisticOracleV3Interface(_getOOV3Address());
		defaultIdentifier = oo.defaultIdentifier(); // "ASSERT_TRUTH"
		escalationManager = new CustomEscalationManager(address(oo));
	}

	// -------- Public Functions ----------------

	// If assertion is disputed, do nothing and wait for resolution.
	// This OptimisticOracleV3 callback function needs to be defined so the OOv3 doesn't revert when it tries to call it.
	function assertionDisputedCallback(bytes32 assertionId) public {}

	// OptimisticOracleV3 resolve callback.
	function assertionResolvedCallback(
		bytes32 _assertionId,
		bool _assertedTruthfully
	) public {
		require(msg.sender == address(oo));
		// If the assertion was true, then the data assertion is resolved.
		if (_assertedTruthfully) {
			assertionsDataMap[_assertionId].resolved = true;
			DataAssertion memory _dataAssertion = assertionsDataMap[
				_assertionId
			];
			emit DataAssertionResolved({
				dataId: _dataAssertion.dataId,
				data: _dataAssertion.data,
				asserter: _dataAssertion.asserter,
				assertionId: _assertionId
			});
			// its called by uma, so if we try to resolve here it may fail then assertion goes to disputed phase. Verified
			// Else delete the data assertion if it was false to save gas.
		} else delete assertionsDataMap[_assertionId];
	}

	// -------- External Functions --------------

	function getResolvedData(
		bytes32 _dataId
	) external view returns (bool, bytes memory) {
		bytes32 _assertionId = dataIdAssertionIdMap[_dataId];
		if (_assertionId == bytes32(0)) {
			return (false, bytes(""));
		}
		if (assertionsDataMap[_assertionId].resolved == false) {
			return (false, bytes(""));
		} else {
			return (true, assertionsDataMap[_assertionId].data);
		}
	}

	function isDataAsserted(bytes32 _dataId) external view returns (bool) {
		bytes32 _assertionId = dataIdAssertionIdMap[_dataId];
		if (_assertionId == bytes32(0)) {
			return false;
		}
		return true;
	}

	function validateDataIdandSender(
		bytes32 _dataId,
		address _address
	) external view returns (bool) {
		return
			(_dataId == bytes32(0) ||
				(_address == address(0)) ||
				providerMap[_dataId].providerAddress != _address)
				? false
				: true;
	}

	function getDataIdDetails(
		bytes32 _dataId
	) public view returns (CompleteData memory _completeData) {
		bytes32 _assertionId = dataIdAssertionIdMap[_dataId];

		DataDetails memory _dataDetails = dataDetailsMap[_dataId];
		ProviderData memory _providerDetails = providerMap[_dataId];
		DataAssertion memory _assertionDetails = assertionsDataMap[
			_assertionId
		];
		_completeData = CompleteData(
			_dataId,
			_dataDetails,
			_providerDetails,
			_assertionDetails
		);
	}

	function assertData(
		bytes32 _dataId,
		bytes memory _data
	)
		external
		// TODO: Data thats asserterd
		nonReentrant
		returns (bool, bytes32)
	{
		// test if its a valid dataId
		require(
			bytes(dataDetailsMap[_dataId].name).length > 0,
			"Invalid Data Id"
		);
		// test if data has already been asserted
		require(
			assertionsDataMap[dataIdAssertionIdMap[_dataId]].asserter ==
				address(0x0),
			"Data already asserted for the dataId"
		);

		return _assertData(_dataId, _data);
	}

	function addProvider(
		string calldata _name,
		string calldata _description,
		string calldata _imageIpfsHash,
		bytes32 _dataJsonHash,
		Fee calldata _fee,
		uint64 _endTimeStamp,
		uint _bond,
		// Not adding game start time so that the contest creator can add this condition, to make possible both before game and in game play possible
		address _currency,
		address _providerAddress,
		uint64 _assertionLiveness,
		string memory _template,
		bytes memory _templateData
	) external payable nonReentrant returns (bool, bytes32) {
		// --------Basic Checks -----------------
		require(bytes(_name).length > 0, "Empty Name");
		require(bytes(_description).length > 0, "Empty Description");
		require(_fee.fee < _fee.decimals, "Fee greater than 100%");
		require(
			_endTimeStamp > block.timestamp,
			"ProviderData Endtime should be greater than now"
		);

		// ------- Currency, Bond Check -----------------
		// TODO: Maybe add a default currency id currency address is 0
		require(
			_getCollateralWhitelist().isOnWhitelist(_currency),
			"Unsupported currency"
		);
		// if (owner() != msg.sender) {
		IERC20 _ierc20currency = IERC20(_currency);
		uint256 _minBond = oo.getMinimumBond(address(_ierc20currency));
		require(_bond >= _minBond, "Bond Too Low");

		// -------- Transfer the currency from sender to this contract of value = bond
		_ierc20currency.safeTransferFrom(msg.sender, address(this), _bond);
		// }

		return
			_addProvider(
				_name,
				_description,
				_imageIpfsHash,
				_dataJsonHash,
				_fee,
				_endTimeStamp,
				_bond,
				_currency,
				_providerAddress,
				_assertionLiveness,
				_template,
				_templateData
			);
	}

	// -------- Private Functions ----------

	function _addProvider(
		string calldata _name,
		string calldata _description,
		string calldata _imageIpfsHash,
		bytes32 _dataJsonHash,
		Fee calldata _fee,
		uint64 _endTimeStamp,
		uint _bond,
		address _currency,
		address _providerAddress,
		uint64 _assertionLiveness,
		string memory _template,
		bytes memory _templateData
	) private returns (bool, bytes32) {
		// -------- Compute Data Id ----------------
		// Data Id doesn't only come from name and description, but from sender, bond etc

		// Setting Default values
		_assertionLiveness = _assertionLiveness == 0
			? 86400 // 24 hours
			: _assertionLiveness;
		_providerAddress = _providerAddress == address(0)
			? msg.sender
			: _providerAddress;
		_template = bytes(_template).length == 0
			? Constants.OPTIONS_PROVIDER_TEMPLATE
			: _template;
		bytes32 _dataId = keccak256(
			abi.encodePacked(
				_name,
				_description,
				_imageIpfsHash,
				_endTimeStamp,
				_providerAddress,
				_fee.fee, // Different fee, same data provider
				_fee.decimals,
				_bond, // Different Bond
				_currency // In diffrent currency
			)
		);
		bool _templateConfigured = ITemplate(
			locator.getAddress(Constants.TEMPLATE, _template)
		).configureTemplate(_dataId, _templateData);
		require(_templateConfigured, "Issue in configuring template");
		bool _result = escalationManager.setEscalationDataMap(
			_dataId,
			_providerAddress,
			_endTimeStamp
		);
		require(_result, "Failed to set Escalation Manager Properties");

		// --------- Update Variables -----------------------
		dataDetailsMap[_dataId] = DataDetails({
			name: _name,
			dataJsonHash: _dataJsonHash,
			imageIpfsHash: _imageIpfsHash,
			description: _description,
			template: _template
		});
		providerMap[_dataId] = ProviderData({
			providerAddress: _providerAddress,
			bond: _bond,
			fee: _fee,
			endTimeStamp: _endTimeStamp,
			assertionLiveness: _assertionLiveness,
			currency: IERC20(_currency)
		});
		dataIdList.push(_dataId);
		emit ProviderAdded({
			dataId: _dataId,
			name: _name,
			dataJsonHash: _dataJsonHash,
			description: _description,
			fee: _fee,
			endTimeStamp: _endTimeStamp,
			bond: _bond,
			currency: _currency,
			providerAddress: _providerAddress,
			assertionLiveness: _assertionLiveness
		});
		return (true, _dataId);
	}

	function _assertDataViaUma(
		bytes32 _dataId,
		bytes memory _data
	) private returns (bool, bytes32) {
		uint _bond = providerMap[_dataId].bond;
		IERC20 _currency = providerMap[_dataId].currency;
		_currency.safeApprove(address(oo), _bond);

		bytes memory _claimData = ITemplate(
			locator.getAddress(
				Constants.TEMPLATE,
				dataDetailsMap[_dataId].template
			)
		).generateClaimData(_dataId, _data);
		bytes32 _assertionId = oo.assertTruth(
			abi.encodePacked(
				"Claim Data: ",
				_claimData,
				" is asserted for: ",
				dataDetailsMap[_dataId].name,
				" with description: ",
				dataDetailsMap[_dataId].description,
				" is valid."
			),
			msg.sender, // asserter will receive back bond if the assertion is correct.
			address(this), // callbackRecipient is set to this contract for automated proposal deletion on disputes.
			address(escalationManager), // escalationManager (if set) used for whitelisting proposers / disputers.
			providerMap[_dataId].assertionLiveness, // liveness in seconds.
			_currency, // currency in which the bond is denominated.
			_bond, // bond amount used to assert proposal.
			defaultIdentifier, // identifier used to determine if the claim is correct at DVM.
			_dataId // Domain is set as dataID, which will be used to relate endTimeStamp, and providerAddress in the assertions made
		);
		assertionsDataMap[_assertionId] = DataAssertion({
			dataId: _dataId,
			data: _data,
			asserter: msg.sender,
			resolved: false
		});
		dataIdAssertionIdMap[_dataId] = _assertionId;
		emit DataAsserted(_dataId, _data, msg.sender, _assertionId);
		return (true, _assertionId);
	}

	function _assertData(
		bytes32 _dataId,
		bytes memory _data
	) private returns (bool, bytes32) {
		// if (owner() != msg.sender) {
		return _assertDataViaUma(_dataId, _data);
		// } else {
		// 	bytes32 _assertionId = keccak256(
		// 		abi.encodePacked(block.timestamp, _dataId)
		// 	);
		// 	assertionsDataMap[_assertionId] = DataAssertion({
		// 		dataId: _dataId,
		// 		data: _data,
		// 		asserter: msg.sender,
		// 		resolved: true
		// 	});
		// 	dataIdAssertionIdMap[_dataId] = _assertionId;
		// 	emit DataAsserted(_dataId, _data, msg.sender, _assertionId);
		// 	emit DataAssertionResolved({
		// 		dataId: _dataId,
		// 		data: _data,
		// 		asserter: msg.sender,
		// 		assertionId: _assertionId
		// 	});
		// 	return (true, _assertionId);
		// }
	}

	// -------- Helpers ---------------

	function _getOOV3Address() private view returns (address) {
		return
			finder.getImplementationAddress(
				OracleInterfaces.OptimisticOracleV3
			);
	}

	function _getCollateralWhitelist() private view returns (AddressWhitelist) {
		return
			AddressWhitelist(
				finder.getImplementationAddress(
					OracleInterfaces.CollateralWhitelist
				)
			);
	}

	// ------ Utils ---------------------

	struct AddressUint {
		string _symbol;
		address _address;
		uint _uint;
	}

	function getSupportedCurrencies()
		public
		view
		returns (AddressUint[] memory _result)
	{
		AddressWhitelist _addressWhitelist = _getCollateralWhitelist();
		address[] memory _currencyAddresses = _addressWhitelist.getWhitelist();
		_result = new AddressUint[](_currencyAddresses.length);
		for (uint i; i < _currencyAddresses.length; i++) {
			string memory _symobol = IERC20Metadata(_currencyAddresses[i])
				.symbol();
			_result[i] = AddressUint(
				_symobol,
				_currencyAddresses[i],
				oo.getMinimumBond(_currencyAddresses[i])
			);
		}
	}

	function getProviderFee(
		bytes32 _dataId
	)
		external
		view
		override
		returns (uint fee, uint decimals, address _providerAddress)
	{
		return (
			providerMap[_dataId].fee.fee,
			providerMap[_dataId].fee.decimals,
			providerMap[_dataId].providerAddress
		);
	}

	function getDataIdTemplate(
		bytes32 _dataId
	) external view override returns (string memory _template) {
		return dataDetailsMap[_dataId].template;
	}

	function addContest(
		bytes32 _dataId,
		bytes memory _data
	) external returns (bool _success, bytes32 _contestId) {
		(_success, _contestId) = IContestFactory(
			locator.getAddress(
				Constants.FACTORY,
				dataDetailsMap[_dataId].template
			)
		).addContest(_dataId, _data);
		require(_success, "Failed to add contest");
	}

	function resolve(bytes32 _dataId) external returns (bool _success) {
		// TODO:
	}
}
