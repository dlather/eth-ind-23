// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Stores common interface names  by registration in the Locator.
 */
library Constants {
	string public constant Provider = "Provider";
	string public constant Registry = "Registry";
	string public constant Operators = "Operators";

	uint public constant defaultDecimals = 10000;
	string public constant INVALID = "INVALID";
	string public constant CONTRACT = "CONTRACT";
	string public constant FACTORY = "FACTORY";
	string public constant TEMPLATE = "TEMPLATE";
	string public constant OTHERS = "OTHERS";

	string public constant OPTIONS_PROVIDER_TEMPLATE =
		"OPTIONS_PROVIDER_TEMPLATE";
	string public constant YES_NO_PROVIDER_TEMPLATE =
		"YES_NO_PROVIDER_TEMPLATE";
	string public constant DEFAULT_TEMPLATE = "OPTIONS_PROVIDER_TEMPLATE";
}
