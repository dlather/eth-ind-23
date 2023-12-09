const contracts = {
  5: [
    {
      chainId: "5",
      name: "goerli",
      contracts: {
        BaseOptionsContest: {
          address: "0x22b858d2154f0F9e886A38287Cfd27EF199ED1b1",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "userAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contestAddress",
                  type: "address",
                },
              ],
              name: "BetPlacedEvent",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_optionsSelected",
                  type: "bytes32[]",
                },
              ],
              name: "areAllOptionsValid",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_ids",
                  type: "bytes32[]",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [],
              name: "getCompleteContestData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "winnersResolved",
                      type: "bool",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "winning",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "bytes32",
                              name: "betId",
                              type: "bytes32",
                            },
                            {
                              internalType: "bytes32[]",
                              name: "optionsSelected",
                              type: "bytes32[]",
                            },
                            {
                              internalType: "address",
                              name: "userAddress",
                              type: "address",
                            },
                            {
                              internalType: "address",
                              name: "operatorAddress",
                              type: "address",
                            },
                          ],
                          internalType: "struct BaseOptionsContest.BetsPlaced",
                          name: "betPlaced",
                          type: "tuple",
                        },
                      ],
                      internalType:
                        "struct BaseOptionsContest.CompleteDataContest[]",
                      name: "data",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.CompleteContestData",
                  name: "_completeContestData",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getContestData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData",
                  name: "_contestData",
                  type: "tuple",
                },
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_operatorAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "placeBet",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "resolveContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "winnersResolved",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "winnings",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdrawWinningAmount",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
          ],
        },
        Locator: {
          address: "0x75c5Ed1F90bCabD91e4C085Bcb1290d049a69242",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newAddress",
                  type: "address",
                },
              ],
              name: "ImplementationChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "changeAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "string[]",
                      name: "names",
                      type: "string[]",
                    },
                  ],
                  internalType: "struct Locator.KeyNameStruct[]",
                  name: "_data",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "implementations",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Operators: {
          address: "0xc847bC2eCc7591BAeDE5B3f99E44a7261cD2496c",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "contestId",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "OperatorAdded",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_operatorAddress",
                  type: "address",
                },
              ],
              name: "getAllContests",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "_contestIds",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_operatorAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              name: "getOperatorFee",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IOperator.Fee",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IOperator.Fee",
                  name: "_fee",
                  type: "tuple",
                },
              ],
              name: "setOperatorFee",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        OptionsContestFactory: {
          address: "0x4EC8f952B143c221BE6c1a62DE30f88C630180d8",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_baseOptionsContestImplementation",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "addContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_count",
                  type: "uint256",
                },
                {
                  internalType: "bytes32[]",
                  name: "_ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_spots",
                  type: "uint256",
                },
                {
                  internalType: "uint64",
                  name: "_stopTimeStamp",
                  type: "uint64",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_contestIds",
                  type: "bytes32[]",
                },
              ],
              name: "getAllContestsDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "contract BaseOptionsContest",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                  ],
                  internalType:
                    "struct OptionsContestFactory.ContestEssentialData[]",
                  name: "_essentialContestData",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              name: "getContestAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getContestsByDataId",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData[]",
                  name: "_contests",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        OptionsProviderTemplate: {
          address: "0xaB7717AB6DB02b37cE9331104b506B67f34346a0",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_data",
                  type: "bytes32[]",
                },
              ],
              name: "areUnique",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "configureTemplate",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "decode",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "symbol",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "ipfsHash",
                      type: "string",
                    },
                  ],
                  internalType: "struct OptionsProviderTemplate.Option[]",
                  name: "_baseOption",
                  type: "tuple[]",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "symbol",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "ipfsHash",
                      type: "string",
                    },
                  ],
                  internalType: "struct OptionsProviderTemplate.BaseOption[]",
                  name: "_baseOption",
                  type: "tuple[]",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "points",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct OptionsProviderTemplate.PointRecord[]",
                  name: "_pointRecords",
                  type: "tuple[]",
                },
              ],
              name: "encodeAssertData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "generateClaimData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getConfiguredTemplate",
              outputs: [
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Provider: {
          address: "0xFD8E0bF9031b95Eb63dC49E4A9317E129390C733",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract FinderInterface",
                  name: "_finder",
                  type: "address",
                },
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "asserter",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              name: "DataAsserted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "asserter",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              name: "DataAssertionResolved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataJsonHash",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  indexed: false,
                  internalType: "struct Provider.Fee",
                  name: "fee",
                  type: "tuple",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "endTimeStamp",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "bond",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "providerAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint64",
                  name: "assertionLiveness",
                  type: "uint64",
                },
              ],
              name: "ProviderAdded",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "addContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "_success",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_imageIpfsHash",
                  type: "string",
                },
                {
                  internalType: "bytes32",
                  name: "_dataJsonHash",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Provider.Fee",
                  name: "_fee",
                  type: "tuple",
                },
                {
                  internalType: "uint64",
                  name: "_endTimeStamp",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "_bond",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_providerAddress",
                  type: "address",
                },
                {
                  internalType: "uint64",
                  name: "_assertionLiveness",
                  type: "uint64",
                },
                {
                  internalType: "string",
                  name: "_template",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_templateData",
                  type: "bytes",
                },
              ],
              name: "addProvider",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "assertData",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              name: "assertionDisputedCallback",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_assertionId",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "_assertedTruthfully",
                  type: "bool",
                },
              ],
              name: "assertionResolvedCallback",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "defaultIdentifier",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "escalationManager",
              outputs: [
                {
                  internalType: "contract CustomEscalationManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "finder",
              outputs: [
                {
                  internalType: "contract FinderInterface",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllDataIdDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "dataJsonHash",
                          type: "bytes32",
                        },
                        {
                          internalType: "string",
                          name: "name",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "imageIpfsHash",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "description",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "template",
                          type: "string",
                        },
                      ],
                      internalType: "struct Provider.DataDetails",
                      name: "dataDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "providerAddress",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "bond",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "decimals",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct Provider.Fee",
                          name: "fee",
                          type: "tuple",
                        },
                        {
                          internalType: "uint256",
                          name: "endTimeStamp",
                          type: "uint256",
                        },
                        {
                          internalType: "uint64",
                          name: "assertionLiveness",
                          type: "uint64",
                        },
                        {
                          internalType: "contract IERC20",
                          name: "currency",
                          type: "address",
                        },
                      ],
                      internalType: "struct Provider.ProviderData",
                      name: "providerDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "dataId",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "address",
                          name: "asserter",
                          type: "address",
                        },
                        {
                          internalType: "bool",
                          name: "resolved",
                          type: "bool",
                        },
                      ],
                      internalType: "struct Provider.DataAssertion",
                      name: "assertionDetails",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Provider.CompleteData[]",
                  name: "_completeData",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getDataIdDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "dataJsonHash",
                          type: "bytes32",
                        },
                        {
                          internalType: "string",
                          name: "name",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "imageIpfsHash",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "description",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "template",
                          type: "string",
                        },
                      ],
                      internalType: "struct Provider.DataDetails",
                      name: "dataDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "providerAddress",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "bond",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "decimals",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct Provider.Fee",
                          name: "fee",
                          type: "tuple",
                        },
                        {
                          internalType: "uint256",
                          name: "endTimeStamp",
                          type: "uint256",
                        },
                        {
                          internalType: "uint64",
                          name: "assertionLiveness",
                          type: "uint64",
                        },
                        {
                          internalType: "contract IERC20",
                          name: "currency",
                          type: "address",
                        },
                      ],
                      internalType: "struct Provider.ProviderData",
                      name: "providerDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "dataId",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "address",
                          name: "asserter",
                          type: "address",
                        },
                        {
                          internalType: "bool",
                          name: "resolved",
                          type: "bool",
                        },
                      ],
                      internalType: "struct Provider.DataAssertion",
                      name: "assertionDetails",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Provider.CompleteData",
                  name: "_completeData",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getDataIdList",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getDataIdTemplate",
              outputs: [
                {
                  internalType: "string",
                  name: "_template",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getProviderFee",
              outputs: [
                {
                  internalType: "uint256",
                  name: "fee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "decimals",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_providerAddress",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getResolvedData",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getSupportedCurrencies",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "_symbol",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "_address",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "_uint",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Provider.AddressUint[]",
                  name: "_result",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "isDataAsserted",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "oo",
              outputs: [
                {
                  internalType: "contract OptimisticOracleV3Interface",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "resolve",
              outputs: [
                {
                  internalType: "bool",
                  name: "_success",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "validateDataIdandSender",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "validatePlaceBet",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Registry: {
          address: "0x7D4840fcF7Fc621a380BbDd440215f214D28537d",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "configs",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getConfig",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "setConfig",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        YesNoContestFactory: {
          address: "0x1E165f544E627F5Dd975eD749f13950EC331fCd6",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_baseOptionsContestImplementation",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contestAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "contestId",
                  type: "bytes32",
                },
              ],
              name: "ContestAdded",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "addContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_spots",
                  type: "uint256",
                },
                {
                  internalType: "uint64",
                  name: "_stopTimeStamp",
                  type: "uint64",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_contestIds",
                  type: "bytes32[]",
                },
              ],
              name: "getAllContestsDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "contract BaseOptionsContest",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                  ],
                  internalType:
                    "struct YesNoContestFactory.ContestEssentialData[]",
                  name: "_essentialContestData",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              name: "getContestAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getContestsByDataId",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData[]",
                  name: "_contests",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        YesNoProviderTemplate: {
          address: "0xF8CD697bfAfb17Bd8EA8d6070486fb85fa2945F5",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "str1",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "str2",
                  type: "string",
                },
              ],
              name: "areEqual",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "configureTemplate",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "decode",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                  ],
                  internalType: "struct YesNoProviderTemplate.IdName[]",
                  name: "_data",
                  type: "tuple[]",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_claimedOption",
                  type: "string",
                },
              ],
              name: "encodeAssertData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "generateClaimData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getConfiguredTemplate",
              outputs: [
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "no",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "noIdName",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "yes",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "yesIdName",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0x06EE5fA5E0E562Da3eF82472a7124a769EdccC16",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "getallvalues",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "addr",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "value",
                      type: "uint256",
                    },
                    {
                      internalType: "uint8[]",
                      name: "values",
                      type: "uint8[]",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "isValid",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "id",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct YourContract.Nested",
                      name: "nested",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct YourContract.KeyValue[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "initKeyValues",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "keyValues",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "addr",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isValid",
                      type: "bool",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct YourContract.Nested",
                  name: "nested",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uintArray",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
  137: [
    {
      chainId: "137",
      name: "polygon",
      contracts: {
        BaseOptionsContest: {
          address: "0xb69F802d61cE484c9FC3B42e9e91D33956fD052c",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "userAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contestAddress",
                  type: "address",
                },
              ],
              name: "BetPlacedEvent",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_optionsSelected",
                  type: "bytes32[]",
                },
              ],
              name: "areAllOptionsValid",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_ids",
                  type: "bytes32[]",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [],
              name: "getCompleteContestData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "winnersResolved",
                      type: "bool",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "winning",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "bytes32",
                              name: "betId",
                              type: "bytes32",
                            },
                            {
                              internalType: "bytes32[]",
                              name: "optionsSelected",
                              type: "bytes32[]",
                            },
                            {
                              internalType: "address",
                              name: "userAddress",
                              type: "address",
                            },
                            {
                              internalType: "address",
                              name: "operatorAddress",
                              type: "address",
                            },
                          ],
                          internalType: "struct BaseOptionsContest.BetsPlaced",
                          name: "betPlaced",
                          type: "tuple",
                        },
                      ],
                      internalType:
                        "struct BaseOptionsContest.CompleteDataContest[]",
                      name: "data",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.CompleteContestData",
                  name: "_completeContestData",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getContestData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData",
                  name: "_contestData",
                  type: "tuple",
                },
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_operatorAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "placeBet",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "resolveContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "winnersResolved",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "winnings",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdrawWinningAmount",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
          ],
        },
        Locator: {
          address: "0x74e9e01C5D4cca57F84231a22f3fEC800341234a",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newAddress",
                  type: "address",
                },
              ],
              name: "ImplementationChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "changeAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "string[]",
                      name: "names",
                      type: "string[]",
                    },
                  ],
                  internalType: "struct Locator.KeyNameStruct[]",
                  name: "_data",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "implementations",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Operators: {
          address: "0x93EBa28e468d126A437f8833916fBb003730B9aa",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_operatorAddress",
                  type: "address",
                },
              ],
              name: "getAllContests",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "_contestIds",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_operatorAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              name: "getOperatorFee",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IOperator.Fee",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IOperator.Fee",
                  name: "_fee",
                  type: "tuple",
                },
              ],
              name: "setOperatorFee",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        OptionsContestFactory: {
          address: "0x1a7E54f930a0B94c5f5b7D31A2004d41173d0068",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_baseOptionsContestImplementation",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "addContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_count",
                  type: "uint256",
                },
                {
                  internalType: "bytes32[]",
                  name: "_ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_spots",
                  type: "uint256",
                },
                {
                  internalType: "uint64",
                  name: "_stopTimeStamp",
                  type: "uint64",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_contestIds",
                  type: "bytes32[]",
                },
              ],
              name: "getAllContestsDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "contract BaseOptionsContest",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                  ],
                  internalType:
                    "struct OptionsContestFactory.ContestEssentialData[]",
                  name: "_essentialContestData",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              name: "getContestAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getContestsByDataId",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData[]",
                  name: "_contests",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        OptionsProviderTemplate: {
          address: "0x9cB66b42285E6bD33755780A4cE9673647b5F3ce",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_data",
                  type: "bytes32[]",
                },
              ],
              name: "areUnique",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "configureTemplate",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "decode",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "symbol",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "ipfsHash",
                      type: "string",
                    },
                  ],
                  internalType: "struct OptionsProviderTemplate.Option[]",
                  name: "_baseOption",
                  type: "tuple[]",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "symbol",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "ipfsHash",
                      type: "string",
                    },
                  ],
                  internalType: "struct OptionsProviderTemplate.BaseOption[]",
                  name: "_baseOption",
                  type: "tuple[]",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "points",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct OptionsProviderTemplate.PointRecord[]",
                  name: "_pointRecords",
                  type: "tuple[]",
                },
              ],
              name: "encodeAssertData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "generateClaimData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getConfiguredTemplate",
              outputs: [
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Provider: {
          address: "0xC1998894C5A8F4d6D4153E4CE1a7635475388905",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract FinderInterface",
                  name: "_finder",
                  type: "address",
                },
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "asserter",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              name: "DataAsserted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "asserter",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              name: "DataAssertionResolved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  indexed: false,
                  internalType: "struct Provider.Fee",
                  name: "fee",
                  type: "tuple",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "endTimeStamp",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "bond",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "providerAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint64",
                  name: "assertionLiveness",
                  type: "uint64",
                },
              ],
              name: "ProviderAdded",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "addContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "_success",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_imageIpfsHash",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Provider.Fee",
                  name: "_fee",
                  type: "tuple",
                },
                {
                  internalType: "uint64",
                  name: "_endTimeStamp",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "_bond",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_providerAddress",
                  type: "address",
                },
                {
                  internalType: "uint64",
                  name: "_assertionLiveness",
                  type: "uint64",
                },
                {
                  internalType: "string",
                  name: "_template",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_templateData",
                  type: "bytes",
                },
              ],
              name: "addProvider",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "assertData",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              name: "assertionDisputedCallback",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_assertionId",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "_assertedTruthfully",
                  type: "bool",
                },
              ],
              name: "assertionResolvedCallback",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "defaultIdentifier",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "escalationManager",
              outputs: [
                {
                  internalType: "contract CustomEscalationManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "finder",
              outputs: [
                {
                  internalType: "contract FinderInterface",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllDataIdDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "string",
                          name: "name",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "imageIpfsHash",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "description",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "template",
                          type: "string",
                        },
                      ],
                      internalType: "struct Provider.DataDetails",
                      name: "dataDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "providerAddress",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "bond",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "decimals",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct Provider.Fee",
                          name: "fee",
                          type: "tuple",
                        },
                        {
                          internalType: "uint256",
                          name: "endTimeStamp",
                          type: "uint256",
                        },
                        {
                          internalType: "uint64",
                          name: "assertionLiveness",
                          type: "uint64",
                        },
                        {
                          internalType: "contract IERC20",
                          name: "currency",
                          type: "address",
                        },
                      ],
                      internalType: "struct Provider.ProviderData",
                      name: "providerDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "dataId",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "address",
                          name: "asserter",
                          type: "address",
                        },
                        {
                          internalType: "bool",
                          name: "resolved",
                          type: "bool",
                        },
                      ],
                      internalType: "struct Provider.DataAssertion",
                      name: "assertionDetails",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Provider.CompleteData[]",
                  name: "_completeData",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getDataIdDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "string",
                          name: "name",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "imageIpfsHash",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "description",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "template",
                          type: "string",
                        },
                      ],
                      internalType: "struct Provider.DataDetails",
                      name: "dataDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "providerAddress",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "bond",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "decimals",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct Provider.Fee",
                          name: "fee",
                          type: "tuple",
                        },
                        {
                          internalType: "uint256",
                          name: "endTimeStamp",
                          type: "uint256",
                        },
                        {
                          internalType: "uint64",
                          name: "assertionLiveness",
                          type: "uint64",
                        },
                        {
                          internalType: "contract IERC20",
                          name: "currency",
                          type: "address",
                        },
                      ],
                      internalType: "struct Provider.ProviderData",
                      name: "providerDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "dataId",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "address",
                          name: "asserter",
                          type: "address",
                        },
                        {
                          internalType: "bool",
                          name: "resolved",
                          type: "bool",
                        },
                      ],
                      internalType: "struct Provider.DataAssertion",
                      name: "assertionDetails",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Provider.CompleteData",
                  name: "_completeData",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getDataIdList",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getDataIdTemplate",
              outputs: [
                {
                  internalType: "string",
                  name: "_template",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getProviderFee",
              outputs: [
                {
                  internalType: "uint256",
                  name: "fee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "decimals",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_providerAddress",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getResolvedData",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getSupportedCurrencies",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "_symbol",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "_address",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "_uint",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Provider.AddressUint[]",
                  name: "_result",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "isDataAsserted",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "oo",
              outputs: [
                {
                  internalType: "contract OptimisticOracleV3Interface",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "resolve",
              outputs: [
                {
                  internalType: "bool",
                  name: "_success",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "validateDataIdandSender",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "validatePlaceBet",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Registry: {
          address: "0x8c2D7B25c9fF05b6a005319095DA468930377D28",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "configs",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getConfig",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "setConfig",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        YesNoContestFactory: {
          address: "0x7911b9B61894A4035Af7A3DE3cDC04398A9b8f3b",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_baseOptionsContestImplementation",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "addContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_spots",
                  type: "uint256",
                },
                {
                  internalType: "uint64",
                  name: "_stopTimeStamp",
                  type: "uint64",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_contestIds",
                  type: "bytes32[]",
                },
              ],
              name: "getAllContestsDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "contract BaseOptionsContest",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                  ],
                  internalType:
                    "struct YesNoContestFactory.ContestEssentialData[]",
                  name: "_essentialContestData",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              name: "getContestAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getContestsByDataId",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData[]",
                  name: "_contests",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        YesNoProviderTemplate: {
          address: "0x797aedcaD1FeFfcdf1653461Ca5e44C1deB1273c",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "str1",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "str2",
                  type: "string",
                },
              ],
              name: "areEqual",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "configureTemplate",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "decode",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                  ],
                  internalType: "struct YesNoProviderTemplate.IdName[]",
                  name: "_data",
                  type: "tuple[]",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_claimedOption",
                  type: "string",
                },
              ],
              name: "encodeAssertData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "generateClaimData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getConfiguredTemplate",
              outputs: [
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "no",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "noIdName",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "yes",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "yesIdName",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0x19106190C3b46Efd30eEbC23dBEAdd1707af6ad3",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "getallvalues",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "addr",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "value",
                      type: "uint256",
                    },
                    {
                      internalType: "uint8[]",
                      name: "values",
                      type: "uint8[]",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "isValid",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "id",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct YourContract.Nested",
                      name: "nested",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct YourContract.KeyValue[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "initKeyValues",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "keyValues",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "addr",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isValid",
                      type: "bool",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct YourContract.Nested",
                  name: "nested",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uintArray",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        BaseOptionsContest: {
          address: "0x9951965e431B87D991Be9097F234DEAEd4536053",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "userAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contestAddress",
                  type: "address",
                },
              ],
              name: "BetPlacedEvent",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_optionsSelected",
                  type: "bytes32[]",
                },
              ],
              name: "areAllOptionsValid",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_ids",
                  type: "bytes32[]",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [],
              name: "getCompleteContestData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "winnersResolved",
                      type: "bool",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "winning",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "bytes32",
                              name: "betId",
                              type: "bytes32",
                            },
                            {
                              internalType: "bytes32[]",
                              name: "optionsSelected",
                              type: "bytes32[]",
                            },
                            {
                              internalType: "address",
                              name: "userAddress",
                              type: "address",
                            },
                            {
                              internalType: "address",
                              name: "operatorAddress",
                              type: "address",
                            },
                          ],
                          internalType: "struct BaseOptionsContest.BetsPlaced",
                          name: "betPlaced",
                          type: "tuple",
                        },
                      ],
                      internalType:
                        "struct BaseOptionsContest.CompleteDataContest[]",
                      name: "data",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.CompleteContestData",
                  name: "_completeContestData",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getContestData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData",
                  name: "_contestData",
                  type: "tuple",
                },
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_operatorAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "placeBet",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "resolveContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "winnersResolved",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "winnings",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdrawWinningAmount",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
          ],
        },
        Locator: {
          address: "0x3739d0418dB3e3DFD153C75D33B5654f576C5600",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newAddress",
                  type: "address",
                },
              ],
              name: "ImplementationChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "changeAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "string[]",
                      name: "names",
                      type: "string[]",
                    },
                  ],
                  internalType: "struct Locator.KeyNameStruct[]",
                  name: "_data",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "implementations",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Operators: {
          address: "0xC3F2012cF0eeb13aeE4241e3C2530B9c38428de4",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_operatorAddress",
                  type: "address",
                },
              ],
              name: "getAllContests",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "_contestIds",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_operatorAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              name: "getOperatorFee",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IOperator.Fee",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IOperator.Fee",
                  name: "_fee",
                  type: "tuple",
                },
              ],
              name: "setOperatorFee",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        OptionsContestFactory: {
          address: "0x87bFaF087Aa2d9724081061195e04A9d70da723F",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_baseOptionsContestImplementation",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "addContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_count",
                  type: "uint256",
                },
                {
                  internalType: "bytes32[]",
                  name: "_ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_spots",
                  type: "uint256",
                },
                {
                  internalType: "uint64",
                  name: "_stopTimeStamp",
                  type: "uint64",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_contestIds",
                  type: "bytes32[]",
                },
              ],
              name: "getAllContestsDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "contract BaseOptionsContest",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                  ],
                  internalType:
                    "struct OptionsContestFactory.ContestEssentialData[]",
                  name: "_essentialContestData",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              name: "getContestAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getContestsByDataId",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData[]",
                  name: "_contests",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        OptionsProviderTemplate: {
          address: "0xCEB8150dD7eA5359b134D7457756A9939C87Bb70",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_data",
                  type: "bytes32[]",
                },
              ],
              name: "areUnique",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "configureTemplate",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "decode",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "symbol",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "ipfsHash",
                      type: "string",
                    },
                  ],
                  internalType: "struct OptionsProviderTemplate.Option[]",
                  name: "_baseOption",
                  type: "tuple[]",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "symbol",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "ipfsHash",
                      type: "string",
                    },
                  ],
                  internalType: "struct OptionsProviderTemplate.BaseOption[]",
                  name: "_baseOption",
                  type: "tuple[]",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "points",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct OptionsProviderTemplate.PointRecord[]",
                  name: "_pointRecords",
                  type: "tuple[]",
                },
              ],
              name: "encodeAssertData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "generateClaimData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getConfiguredTemplate",
              outputs: [
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Provider: {
          address: "0xF455b79ff98b8C92b8C4C4eA144835841a9634eA",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract FinderInterface",
                  name: "_finder",
                  type: "address",
                },
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "asserter",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              name: "DataAsserted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "asserter",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              name: "DataAssertionResolved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  indexed: false,
                  internalType: "struct Provider.Fee",
                  name: "fee",
                  type: "tuple",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "endTimeStamp",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "bond",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "providerAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint64",
                  name: "assertionLiveness",
                  type: "uint64",
                },
              ],
              name: "ProviderAdded",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "addContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "_success",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_imageIpfsHash",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Provider.Fee",
                  name: "_fee",
                  type: "tuple",
                },
                {
                  internalType: "uint64",
                  name: "_endTimeStamp",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "_bond",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_providerAddress",
                  type: "address",
                },
                {
                  internalType: "uint64",
                  name: "_assertionLiveness",
                  type: "uint64",
                },
                {
                  internalType: "string",
                  name: "_template",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_templateData",
                  type: "bytes",
                },
              ],
              name: "addProvider",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "assertData",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              name: "assertionDisputedCallback",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_assertionId",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "_assertedTruthfully",
                  type: "bool",
                },
              ],
              name: "assertionResolvedCallback",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "defaultIdentifier",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "escalationManager",
              outputs: [
                {
                  internalType: "contract CustomEscalationManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "finder",
              outputs: [
                {
                  internalType: "contract FinderInterface",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllDataIdDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "string",
                          name: "name",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "imageIpfsHash",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "description",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "template",
                          type: "string",
                        },
                      ],
                      internalType: "struct Provider.DataDetails",
                      name: "dataDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "providerAddress",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "bond",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "decimals",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct Provider.Fee",
                          name: "fee",
                          type: "tuple",
                        },
                        {
                          internalType: "uint256",
                          name: "endTimeStamp",
                          type: "uint256",
                        },
                        {
                          internalType: "uint64",
                          name: "assertionLiveness",
                          type: "uint64",
                        },
                        {
                          internalType: "contract IERC20",
                          name: "currency",
                          type: "address",
                        },
                      ],
                      internalType: "struct Provider.ProviderData",
                      name: "providerDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "dataId",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "address",
                          name: "asserter",
                          type: "address",
                        },
                        {
                          internalType: "bool",
                          name: "resolved",
                          type: "bool",
                        },
                      ],
                      internalType: "struct Provider.DataAssertion",
                      name: "assertionDetails",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Provider.CompleteData[]",
                  name: "_completeData",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getDataIdDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "string",
                          name: "name",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "imageIpfsHash",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "description",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "template",
                          type: "string",
                        },
                      ],
                      internalType: "struct Provider.DataDetails",
                      name: "dataDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "providerAddress",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "bond",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "decimals",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct Provider.Fee",
                          name: "fee",
                          type: "tuple",
                        },
                        {
                          internalType: "uint256",
                          name: "endTimeStamp",
                          type: "uint256",
                        },
                        {
                          internalType: "uint64",
                          name: "assertionLiveness",
                          type: "uint64",
                        },
                        {
                          internalType: "contract IERC20",
                          name: "currency",
                          type: "address",
                        },
                      ],
                      internalType: "struct Provider.ProviderData",
                      name: "providerDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "dataId",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "address",
                          name: "asserter",
                          type: "address",
                        },
                        {
                          internalType: "bool",
                          name: "resolved",
                          type: "bool",
                        },
                      ],
                      internalType: "struct Provider.DataAssertion",
                      name: "assertionDetails",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Provider.CompleteData",
                  name: "_completeData",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getDataIdList",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getDataIdTemplate",
              outputs: [
                {
                  internalType: "string",
                  name: "_template",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getProviderFee",
              outputs: [
                {
                  internalType: "uint256",
                  name: "fee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "decimals",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_providerAddress",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getResolvedData",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getSupportedCurrencies",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "_symbol",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "_address",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "_uint",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Provider.AddressUint[]",
                  name: "_result",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "oo",
              outputs: [
                {
                  internalType: "contract OptimisticOracleV3Interface",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "resolve",
              outputs: [
                {
                  internalType: "bool",
                  name: "_success",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "validateDataIdandSender",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "validatePlaceBet",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Registry: {
          address: "0x0B899FdDF0C1e184037c856378995169C5804905",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "configs",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getConfig",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "setConfig",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        YesNoContestFactory: {
          address: "0xe1c032b20c11199B44F08527375e33dA925CfD7d",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_baseOptionsContestImplementation",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "addContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_spots",
                  type: "uint256",
                },
                {
                  internalType: "uint64",
                  name: "_stopTimeStamp",
                  type: "uint64",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_contestIds",
                  type: "bytes32[]",
                },
              ],
              name: "getAllContestsDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "contract BaseOptionsContest",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                  ],
                  internalType:
                    "struct YesNoContestFactory.ContestEssentialData[]",
                  name: "_essentialContestData",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              name: "getContestAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getContestsByDataId",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData[]",
                  name: "_contests",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        YesNoProviderTemplate: {
          address: "0x84971cf987e284AA1F62133fCB82B8e4fee258e9",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "str1",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "str2",
                  type: "string",
                },
              ],
              name: "areEqual",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "configureTemplate",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "decode",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                  ],
                  internalType: "struct YesNoProviderTemplate.IdName[]",
                  name: "_data",
                  type: "tuple[]",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_claimedOption",
                  type: "string",
                },
              ],
              name: "encodeAssertData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "generateClaimData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getConfiguredTemplate",
              outputs: [
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "no",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "noIdName",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "yes",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "yesIdName",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0x8d1f29Ff5bAac6008fB176B8131cDb644624E428",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "getallvalues",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "addr",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "value",
                      type: "uint256",
                    },
                    {
                      internalType: "uint8[]",
                      name: "values",
                      type: "uint8[]",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "isValid",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "id",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct YourContract.Nested",
                      name: "nested",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct YourContract.KeyValue[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "initKeyValues",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "keyValues",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "addr",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isValid",
                      type: "bool",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct YourContract.Nested",
                  name: "nested",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uintArray",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
  44787: [
    {
      chainId: "44787",
      name: "alfajores",
      contracts: {
        BaseOptionsContest: {
          address: "0xf608aD675AC542968435e1C500A768FcEE9874AD",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "userAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contestAddress",
                  type: "address",
                },
              ],
              name: "BetPlacedEvent",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_optionsSelected",
                  type: "bytes32[]",
                },
              ],
              name: "areAllOptionsValid",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_ids",
                  type: "bytes32[]",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [],
              name: "getCompleteContestData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "winnersResolved",
                      type: "bool",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "winning",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "bytes32",
                              name: "betId",
                              type: "bytes32",
                            },
                            {
                              internalType: "bytes32[]",
                              name: "optionsSelected",
                              type: "bytes32[]",
                            },
                            {
                              internalType: "address",
                              name: "userAddress",
                              type: "address",
                            },
                            {
                              internalType: "address",
                              name: "operatorAddress",
                              type: "address",
                            },
                          ],
                          internalType: "struct BaseOptionsContest.BetsPlaced",
                          name: "betPlaced",
                          type: "tuple",
                        },
                      ],
                      internalType:
                        "struct BaseOptionsContest.CompleteDataContest[]",
                      name: "data",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.CompleteContestData",
                  name: "_completeContestData",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getContestData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData",
                  name: "_contestData",
                  type: "tuple",
                },
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_operatorAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "placeBet",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "resolveContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "winnersResolved",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "winnings",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdrawWinningAmount",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
          ],
        },
        Locator: {
          address: "0xd3754DA3b9D2282a7850859D8413A8D91cd22b90",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newAddress",
                  type: "address",
                },
              ],
              name: "ImplementationChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "changeAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "string[]",
                      name: "names",
                      type: "string[]",
                    },
                  ],
                  internalType: "struct Locator.KeyNameStruct[]",
                  name: "_data",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "implementations",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Operators: {
          address: "0x2Db13ec5DF9582c13Cba97935A45676Ca2a78E1E",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "contestId",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  indexed: true,
                  internalType: "struct IOperator.Fee",
                  name: "fee",
                  type: "tuple",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
              ],
              name: "OperatorAdded",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_operatorAddress",
                  type: "address",
                },
              ],
              name: "getAllContests",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "_contestIds",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_operatorAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              name: "getOperatorFee",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IOperator.Fee",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IOperator.Fee",
                  name: "_fee",
                  type: "tuple",
                },
              ],
              name: "setOperatorFee",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        OptionsContestFactory: {
          address: "0xfD324146dA4724cDB6d6A5B7934CA2915c3a85e6",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_baseOptionsContestImplementation",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "addContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_count",
                  type: "uint256",
                },
                {
                  internalType: "bytes32[]",
                  name: "_ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_spots",
                  type: "uint256",
                },
                {
                  internalType: "uint64",
                  name: "_stopTimeStamp",
                  type: "uint64",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_contestIds",
                  type: "bytes32[]",
                },
              ],
              name: "getAllContestsDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "contract BaseOptionsContest",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                  ],
                  internalType:
                    "struct OptionsContestFactory.ContestEssentialData[]",
                  name: "_essentialContestData",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              name: "getContestAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getContestsByDataId",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData[]",
                  name: "_contests",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        OptionsProviderTemplate: {
          address: "0x74e9e01C5D4cca57F84231a22f3fEC800341234a",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_data",
                  type: "bytes32[]",
                },
              ],
              name: "areUnique",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "configureTemplate",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "decode",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "symbol",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "ipfsHash",
                      type: "string",
                    },
                  ],
                  internalType: "struct OptionsProviderTemplate.Option[]",
                  name: "_baseOption",
                  type: "tuple[]",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "symbol",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "ipfsHash",
                      type: "string",
                    },
                  ],
                  internalType: "struct OptionsProviderTemplate.BaseOption[]",
                  name: "_baseOption",
                  type: "tuple[]",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "points",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct OptionsProviderTemplate.PointRecord[]",
                  name: "_pointRecords",
                  type: "tuple[]",
                },
              ],
              name: "encodeAssertData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "generateClaimData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getConfiguredTemplate",
              outputs: [
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Registry: {
          address: "0x19106190C3b46Efd30eEbC23dBEAdd1707af6ad3",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "configs",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getConfig",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "setConfig",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        YesNoContestFactory: {
          address: "0x77EDBa34d4F5355Af6060D6E6cE6b2a41114f5Fe",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_baseOptionsContestImplementation",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contestAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "contestId",
                  type: "bytes32",
                },
              ],
              name: "ContestAdded",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "addContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_spots",
                  type: "uint256",
                },
                {
                  internalType: "uint64",
                  name: "_stopTimeStamp",
                  type: "uint64",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_contestIds",
                  type: "bytes32[]",
                },
              ],
              name: "getAllContestsDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "contract BaseOptionsContest",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                  ],
                  internalType:
                    "struct YesNoContestFactory.ContestEssentialData[]",
                  name: "_essentialContestData",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              name: "getContestAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getContestsByDataId",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData[]",
                  name: "_contests",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        YesNoProviderTemplate: {
          address: "0x8c2D7B25c9fF05b6a005319095DA468930377D28",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "str1",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "str2",
                  type: "string",
                },
              ],
              name: "areEqual",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "configureTemplate",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "decode",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                  ],
                  internalType: "struct YesNoProviderTemplate.IdName[]",
                  name: "_data",
                  type: "tuple[]",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_claimedOption",
                  type: "string",
                },
              ],
              name: "encodeAssertData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "generateClaimData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getConfiguredTemplate",
              outputs: [
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "no",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "noIdName",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "yes",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "yesIdName",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0x140AD180FdCE87ab9610B3Bb6c2C28A5e9EBD08B",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "getallvalues",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "addr",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "value",
                      type: "uint256",
                    },
                    {
                      internalType: "uint8[]",
                      name: "values",
                      type: "uint8[]",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "isValid",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "id",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct YourContract.Nested",
                      name: "nested",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct YourContract.KeyValue[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "initKeyValues",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "keyValues",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "addr",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isValid",
                      type: "bool",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct YourContract.Nested",
                  name: "nested",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uintArray",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
  80001: [
    {
      chainId: "80001",
      name: "polygonMumbai",
      contracts: {
        Locator: {
          address: "0x32d42341e36221C1D14a3f11927016a2Bb861afb",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newAddress",
                  type: "address",
                },
              ],
              name: "ImplementationChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "changeAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "string[]",
                      name: "names",
                      type: "string[]",
                    },
                  ],
                  internalType: "struct Locator.KeyNameStruct[]",
                  name: "_data",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "implementations",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Registry: {
          address: "0xea2B469C4C1e85bB5B862BC9Cdc0DB9B2C1c6c43",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "configs",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getConfig",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "setConfig",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0x6d460675863198E9CF3379bF77a7A3E92Faf59e1",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "getallvalues",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "addr",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "value",
                      type: "uint256",
                    },
                    {
                      internalType: "uint8[]",
                      name: "values",
                      type: "uint8[]",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "isValid",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "id",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct YourContract.Nested",
                      name: "nested",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct YourContract.KeyValue[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "initKeyValues",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "keyValues",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "addr",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isValid",
                      type: "bool",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct YourContract.Nested",
                  name: "nested",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uintArray",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
  84531: [
    {
      chainId: "84531",
      name: "baseGoerli",
      contracts: {
        BaseOptionsContest: {
          address: "0xfD324146dA4724cDB6d6A5B7934CA2915c3a85e6",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "userAddress",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "contestAddress",
                  type: "address",
                },
              ],
              name: "BetPlacedEvent",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_optionsSelected",
                  type: "bytes32[]",
                },
              ],
              name: "areAllOptionsValid",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_ids",
                  type: "bytes32[]",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [],
              name: "getCompleteContestData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "winnersResolved",
                      type: "bool",
                    },
                    {
                      components: [
                        {
                          internalType: "uint256",
                          name: "winning",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "bytes32",
                              name: "betId",
                              type: "bytes32",
                            },
                            {
                              internalType: "bytes32[]",
                              name: "optionsSelected",
                              type: "bytes32[]",
                            },
                            {
                              internalType: "address",
                              name: "userAddress",
                              type: "address",
                            },
                            {
                              internalType: "address",
                              name: "operatorAddress",
                              type: "address",
                            },
                          ],
                          internalType: "struct BaseOptionsContest.BetsPlaced",
                          name: "betPlaced",
                          type: "tuple",
                        },
                      ],
                      internalType:
                        "struct BaseOptionsContest.CompleteDataContest[]",
                      name: "data",
                      type: "tuple[]",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.CompleteContestData",
                  name: "_completeContestData",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getContestData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData",
                  name: "_contestData",
                  type: "tuple",
                },
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              name: "initialize",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_operatorAddress",
                  type: "address",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "placeBet",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "resolveContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "winnersResolved",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "winnings",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdrawWinningAmount",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
          ],
        },
        Locator: {
          address: "0xd3754DA3b9D2282a7850859D8413A8D91cd22b90",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newAddress",
                  type: "address",
                },
              ],
              name: "ImplementationChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "changeAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "string[]",
                      name: "names",
                      type: "string[]",
                    },
                  ],
                  internalType: "struct Locator.KeyNameStruct[]",
                  name: "_data",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "implementations",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Operators: {
          address: "0x93EBa28e468d126A437f8833916fBb003730B9aa",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_operatorAddress",
                  type: "address",
                },
              ],
              name: "getAllContests",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "_contestIds",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_operatorAddress",
                  type: "address",
                },
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              name: "getOperatorFee",
              outputs: [
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IOperator.Fee",
                  name: "",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct IOperator.Fee",
                  name: "_fee",
                  type: "tuple",
                },
              ],
              name: "setOperatorFee",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        OptionsContestFactory: {
          address: "0x77EDBa34d4F5355Af6060D6E6cE6b2a41114f5Fe",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_baseOptionsContestImplementation",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "addContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_count",
                  type: "uint256",
                },
                {
                  internalType: "bytes32[]",
                  name: "_ids",
                  type: "bytes32[]",
                },
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_spots",
                  type: "uint256",
                },
                {
                  internalType: "uint64",
                  name: "_stopTimeStamp",
                  type: "uint64",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_contestIds",
                  type: "bytes32[]",
                },
              ],
              name: "getAllContestsDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "contract BaseOptionsContest",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                  ],
                  internalType:
                    "struct OptionsContestFactory.ContestEssentialData[]",
                  name: "_essentialContestData",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              name: "getContestAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getContestsByDataId",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData[]",
                  name: "_contests",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        OptionsProviderTemplate: {
          address: "0x8c2D7B25c9fF05b6a005319095DA468930377D28",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_data",
                  type: "bytes32[]",
                },
              ],
              name: "areUnique",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "configureTemplate",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "decode",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "symbol",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "ipfsHash",
                      type: "string",
                    },
                  ],
                  internalType: "struct OptionsProviderTemplate.Option[]",
                  name: "_baseOption",
                  type: "tuple[]",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "symbol",
                      type: "string",
                    },
                    {
                      internalType: "string",
                      name: "ipfsHash",
                      type: "string",
                    },
                  ],
                  internalType: "struct OptionsProviderTemplate.BaseOption[]",
                  name: "_baseOption",
                  type: "tuple[]",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "points",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct OptionsProviderTemplate.PointRecord[]",
                  name: "_pointRecords",
                  type: "tuple[]",
                },
              ],
              name: "encodeAssertData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "generateClaimData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getConfiguredTemplate",
              outputs: [
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Provider: {
          address: "0x74e9e01C5D4cca57F84231a22f3fEC800341234a",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract FinderInterface",
                  name: "_finder",
                  type: "address",
                },
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "asserter",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              name: "DataAsserted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: false,
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "asserter",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              name: "DataAssertionResolved",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "bytes32",
                  name: "dataId",
                  type: "bytes32",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "description",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  indexed: false,
                  internalType: "struct Provider.Fee",
                  name: "fee",
                  type: "tuple",
                },
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "endTimeStamp",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "bond",
                  type: "uint256",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "currency",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "providerAddress",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "uint64",
                  name: "assertionLiveness",
                  type: "uint64",
                },
              ],
              name: "ProviderAdded",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "addContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "_success",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_description",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_imageIpfsHash",
                  type: "string",
                },
                {
                  components: [
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "decimals",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Provider.Fee",
                  name: "_fee",
                  type: "tuple",
                },
                {
                  internalType: "uint64",
                  name: "_endTimeStamp",
                  type: "uint64",
                },
                {
                  internalType: "uint256",
                  name: "_bond",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_providerAddress",
                  type: "address",
                },
                {
                  internalType: "uint64",
                  name: "_assertionLiveness",
                  type: "uint64",
                },
                {
                  internalType: "string",
                  name: "_template",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_templateData",
                  type: "bytes",
                },
              ],
              name: "addProvider",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "assertData",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "assertionId",
                  type: "bytes32",
                },
              ],
              name: "assertionDisputedCallback",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_assertionId",
                  type: "bytes32",
                },
                {
                  internalType: "bool",
                  name: "_assertedTruthfully",
                  type: "bool",
                },
              ],
              name: "assertionResolvedCallback",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "defaultIdentifier",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "escalationManager",
              outputs: [
                {
                  internalType: "contract CustomEscalationManager",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "finder",
              outputs: [
                {
                  internalType: "contract FinderInterface",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getAllDataIdDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "string",
                          name: "name",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "imageIpfsHash",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "description",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "template",
                          type: "string",
                        },
                      ],
                      internalType: "struct Provider.DataDetails",
                      name: "dataDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "providerAddress",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "bond",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "decimals",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct Provider.Fee",
                          name: "fee",
                          type: "tuple",
                        },
                        {
                          internalType: "uint256",
                          name: "endTimeStamp",
                          type: "uint256",
                        },
                        {
                          internalType: "uint64",
                          name: "assertionLiveness",
                          type: "uint64",
                        },
                        {
                          internalType: "contract IERC20",
                          name: "currency",
                          type: "address",
                        },
                      ],
                      internalType: "struct Provider.ProviderData",
                      name: "providerDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "dataId",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "address",
                          name: "asserter",
                          type: "address",
                        },
                        {
                          internalType: "bool",
                          name: "resolved",
                          type: "bool",
                        },
                      ],
                      internalType: "struct Provider.DataAssertion",
                      name: "assertionDetails",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Provider.CompleteData[]",
                  name: "_completeData",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getDataIdDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      components: [
                        {
                          internalType: "string",
                          name: "name",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "imageIpfsHash",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "description",
                          type: "string",
                        },
                        {
                          internalType: "string",
                          name: "template",
                          type: "string",
                        },
                      ],
                      internalType: "struct Provider.DataDetails",
                      name: "dataDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "address",
                          name: "providerAddress",
                          type: "address",
                        },
                        {
                          internalType: "uint256",
                          name: "bond",
                          type: "uint256",
                        },
                        {
                          components: [
                            {
                              internalType: "uint256",
                              name: "fee",
                              type: "uint256",
                            },
                            {
                              internalType: "uint256",
                              name: "decimals",
                              type: "uint256",
                            },
                          ],
                          internalType: "struct Provider.Fee",
                          name: "fee",
                          type: "tuple",
                        },
                        {
                          internalType: "uint256",
                          name: "endTimeStamp",
                          type: "uint256",
                        },
                        {
                          internalType: "uint64",
                          name: "assertionLiveness",
                          type: "uint64",
                        },
                        {
                          internalType: "contract IERC20",
                          name: "currency",
                          type: "address",
                        },
                      ],
                      internalType: "struct Provider.ProviderData",
                      name: "providerDetails",
                      type: "tuple",
                    },
                    {
                      components: [
                        {
                          internalType: "bytes32",
                          name: "dataId",
                          type: "bytes32",
                        },
                        {
                          internalType: "bytes",
                          name: "data",
                          type: "bytes",
                        },
                        {
                          internalType: "address",
                          name: "asserter",
                          type: "address",
                        },
                        {
                          internalType: "bool",
                          name: "resolved",
                          type: "bool",
                        },
                      ],
                      internalType: "struct Provider.DataAssertion",
                      name: "assertionDetails",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct Provider.CompleteData",
                  name: "_completeData",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getDataIdList",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getDataIdTemplate",
              outputs: [
                {
                  internalType: "string",
                  name: "_template",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getProviderFee",
              outputs: [
                {
                  internalType: "uint256",
                  name: "fee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "decimals",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_providerAddress",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getResolvedData",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getSupportedCurrencies",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "_symbol",
                      type: "string",
                    },
                    {
                      internalType: "address",
                      name: "_address",
                      type: "address",
                    },
                    {
                      internalType: "uint256",
                      name: "_uint",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Provider.AddressUint[]",
                  name: "_result",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "isDataAsserted",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "oo",
              outputs: [
                {
                  internalType: "contract OptimisticOracleV3Interface",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "resolve",
              outputs: [
                {
                  internalType: "bool",
                  name: "_success",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "validateDataIdandSender",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "validatePlaceBet",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        Registry: {
          address: "0x19106190C3b46Efd30eEbC23dBEAdd1707af6ad3",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "configs",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getConfig",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "setConfig",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        YesNoContestFactory: {
          address: "0x2Db13ec5DF9582c13Cba97935A45676Ca2a78E1E",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_baseOptionsContestImplementation",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "addContest",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fee",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "_spots",
                  type: "uint256",
                },
                {
                  internalType: "uint64",
                  name: "_stopTimeStamp",
                  type: "uint64",
                },
              ],
              name: "encode",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "_contestIds",
                  type: "bytes32[]",
                },
              ],
              name: "getAllContestsDetails",
              outputs: [
                {
                  components: [
                    {
                      internalType: "contract BaseOptionsContest",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                  ],
                  internalType:
                    "struct YesNoContestFactory.ContestEssentialData[]",
                  name: "_essentialContestData",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_contestId",
                  type: "bytes32",
                },
              ],
              name: "getContestAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getContestsByDataId",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "dataId",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "contestAddress",
                      type: "address",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "uint256",
                      name: "count",
                      type: "uint256",
                    },
                    {
                      internalType: "bytes32[]",
                      name: "validIds",
                      type: "bytes32[]",
                    },
                    {
                      internalType: "uint256",
                      name: "fee",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "spots",
                      type: "uint256",
                    },
                    {
                      internalType: "uint64",
                      name: "stopTimeStamp",
                      type: "uint64",
                    },
                  ],
                  internalType: "struct BaseOptionsContest.ContestData[]",
                  name: "_contests",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        YesNoProviderTemplate: {
          address: "0xf608aD675AC542968435e1C500A768FcEE9874AD",
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ILocator",
                  name: "_locator",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "str1",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "str2",
                  type: "string",
                },
              ],
              name: "areEqual",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "configureTemplate",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              name: "decode",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "string",
                      name: "name",
                      type: "string",
                    },
                  ],
                  internalType: "struct YesNoProviderTemplate.IdName[]",
                  name: "_data",
                  type: "tuple[]",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_claimedOption",
                  type: "string",
                },
              ],
              name: "encodeAssertData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "generateClaimData",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "_dataId",
                  type: "bytes32",
                },
              ],
              name: "getConfiguredTemplate",
              outputs: [
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "no",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "noIdName",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "yes",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "yesIdName",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0x140AD180FdCE87ab9610B3Bb6c2C28A5e9EBD08B",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "getallvalues",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "addr",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "value",
                      type: "uint256",
                    },
                    {
                      internalType: "uint8[]",
                      name: "values",
                      type: "uint8[]",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "isValid",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "id",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct YourContract.Nested",
                      name: "nested",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct YourContract.KeyValue[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "initKeyValues",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "keyValues",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "addr",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isValid",
                      type: "bool",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct YourContract.Nested",
                  name: "nested",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uintArray",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
  421613: [
    {
      chainId: "421613",
      name: "arbitrumGoerli",
      contracts: {
        Locator: {
          address: "0xd3754DA3b9D2282a7850859D8413A8D91cd22b90",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newAddress",
                  type: "address",
                },
              ],
              name: "ImplementationChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "changeAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "string[]",
                      name: "names",
                      type: "string[]",
                    },
                  ],
                  internalType: "struct Locator.KeyNameStruct[]",
                  name: "_data",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "implementations",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Registry: {
          address: "0x19106190C3b46Efd30eEbC23dBEAdd1707af6ad3",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "configs",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getConfig",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "setConfig",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0x140AD180FdCE87ab9610B3Bb6c2C28A5e9EBD08B",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "getallvalues",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "addr",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "value",
                      type: "uint256",
                    },
                    {
                      internalType: "uint8[]",
                      name: "values",
                      type: "uint8[]",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "isValid",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "id",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct YourContract.Nested",
                      name: "nested",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct YourContract.KeyValue[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "initKeyValues",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "keyValues",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "addr",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isValid",
                      type: "bool",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct YourContract.Nested",
                  name: "nested",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uintArray",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
  534351: [
    {
      chainId: "534351",
      name: "scrollSepolia",
      contracts: {
        Locator: {
          address: "0xd3754DA3b9D2282a7850859D8413A8D91cd22b90",
          abi: [
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "string",
                  name: "name",
                  type: "string",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newAddress",
                  type: "address",
                },
              ],
              name: "ImplementationChanged",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferStarted",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              inputs: [],
              name: "acceptOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "changeAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getData",
              outputs: [
                {
                  components: [
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "string[]",
                      name: "names",
                      type: "string[]",
                    },
                  ],
                  internalType: "struct Locator.KeyNameStruct[]",
                  name: "_data",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "implementations",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "pendingOwner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        Registry: {
          address: "0x19106190C3b46Efd30eEbC23dBEAdd1707af6ad3",
          abi: [
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
                {
                  internalType: "bytes32",
                  name: "",
                  type: "bytes32",
                },
              ],
              name: "configs",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
              ],
              name: "getConfig",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_key",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "_name",
                  type: "string",
                },
                {
                  internalType: "bytes",
                  name: "_data",
                  type: "bytes",
                },
              ],
              name: "setConfig",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
          ],
        },
        YourContract: {
          address: "0x140AD180FdCE87ab9610B3Bb6c2C28A5e9EBD08B",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "getallvalues",
              outputs: [
                {
                  components: [
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                    {
                      internalType: "address",
                      name: "addr",
                      type: "address",
                    },
                    {
                      internalType: "string",
                      name: "key",
                      type: "string",
                    },
                    {
                      internalType: "uint256",
                      name: "value",
                      type: "uint256",
                    },
                    {
                      internalType: "uint8[]",
                      name: "values",
                      type: "uint8[]",
                    },
                    {
                      components: [
                        {
                          internalType: "bool",
                          name: "isValid",
                          type: "bool",
                        },
                        {
                          internalType: "bytes32",
                          name: "id",
                          type: "bytes32",
                        },
                      ],
                      internalType: "struct YourContract.Nested",
                      name: "nested",
                      type: "tuple",
                    },
                  ],
                  internalType: "struct YourContract.KeyValue[]",
                  name: "",
                  type: "tuple[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "initKeyValues",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "keyValues",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "addr",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "key",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
                {
                  components: [
                    {
                      internalType: "bool",
                      name: "isValid",
                      type: "bool",
                    },
                    {
                      internalType: "bytes32",
                      name: "id",
                      type: "bytes32",
                    },
                  ],
                  internalType: "struct YourContract.Nested",
                  name: "nested",
                  type: "tuple",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "uintArray",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
