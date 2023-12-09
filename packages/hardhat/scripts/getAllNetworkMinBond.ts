import * as dotenv from "dotenv";
dotenv.config();
import { ethers, Contract } from "ethers";

const finderInterfaceAbi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "interfaceName",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "implementationAddress",
        type: "address",
      },
    ],
    name: "changeImplementationAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "interfaceName",
        type: "bytes32",
      },
    ],
    name: "getImplementationAddress",
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
];
const oov3InterfaceAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "defaultCurrency",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "defaultLiveness",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "burnedBondPercentage",
        type: "uint256",
      },
    ],
    name: "AdminPropertiesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "assertionId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "disputer",
        type: "address",
      },
    ],
    name: "AssertionDisputed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "assertionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "domainId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "claim",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asserter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "callbackRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "escalationManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "expirationTime",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "currency",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bond",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
    ],
    name: "AssertionMade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "assertionId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "bondRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "disputed",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "settlementResolution",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "settleCaller",
        type: "address",
      },
    ],
    name: "AssertionSettled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "claim",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "asserter",
        type: "address",
      },
      {
        internalType: "address",
        name: "callbackRecipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "escalationManager",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "liveness",
        type: "uint64",
      },
      {
        internalType: "contract IERC20",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "bond",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "domainId",
        type: "bytes32",
      },
    ],
    name: "assertTruth",
    outputs: [
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
        internalType: "bytes",
        name: "claim",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "asserter",
        type: "address",
      },
    ],
    name: "assertTruthWithDefaults",
    outputs: [
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
    inputs: [
      {
        internalType: "bytes32",
        name: "assertionId",
        type: "bytes32",
      },
    ],
    name: "getAssertion",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "bool",
                name: "arbitrateViaEscalationManager",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "discardOracle",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "validateDisputers",
                type: "bool",
              },
              {
                internalType: "address",
                name: "assertingCaller",
                type: "address",
              },
              {
                internalType: "address",
                name: "escalationManager",
                type: "address",
              },
            ],
            internalType: "struct OptimisticOracleV3Interface.EscalationManagerSettings",
            name: "escalationManagerSettings",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "asserter",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "assertionTime",
            type: "uint64",
          },
          {
            internalType: "bool",
            name: "settled",
            type: "bool",
          },
          {
            internalType: "contract IERC20",
            name: "currency",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "expirationTime",
            type: "uint64",
          },
          {
            internalType: "bool",
            name: "settlementResolution",
            type: "bool",
          },
          {
            internalType: "bytes32",
            name: "domainId",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "identifier",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "bond",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "callbackRecipient",
            type: "address",
          },
          {
            internalType: "address",
            name: "disputer",
            type: "address",
          },
        ],
        internalType: "struct OptimisticOracleV3Interface.Assertion",
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
        name: "assertionId",
        type: "bytes32",
      },
    ],
    name: "getAssertionResult",
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
        name: "currency",
        type: "address",
      },
    ],
    name: "getMinimumBond",
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
        internalType: "bytes32",
        name: "assertionId",
        type: "bytes32",
      },
    ],
    name: "settleAndGetAssertionResult",
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
        internalType: "bytes32",
        name: "assertionId",
        type: "bytes32",
      },
    ],
    name: "settleAssertion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "identifier",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "syncUmaParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const addressWhitelistAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addedAddress",
        type: "address",
      },
    ],
    name: "AddedToWhitelist",
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
        internalType: "address",
        name: "removedAddress",
        type: "address",
      },
    ],
    name: "RemovedFromWhitelist",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newElement",
        type: "address",
      },
    ],
    name: "addToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getWhitelist",
    outputs: [
      {
        internalType: "address[]",
        name: "activeWhitelist",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "elementToCheck",
        type: "address",
      },
    ],
    name: "isOnWhitelist",
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
    inputs: [
      {
        internalType: "address",
        name: "elementToRemove",
        type: "address",
      },
    ],
    name: "removeFromWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelist",
    outputs: [
      {
        internalType: "enum AddressWhitelist.Status",
        name: "",
        type: "uint8",
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
    name: "whitelistIndices",
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
];

const ierc20MetadataAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    name: "symbol",
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
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const providerApiKey = process.env.ALCHEMY_API_KEY_POLYGON_MUMBAI || "";
type NetworkConfig = {
  url: string;
  finder: string;
};
type Networks = {
  [networkKey: string]: NetworkConfig;
};
const networks: Networks = {
  // View the networks that are pre-configured.
  // If the network you are looking for is not here you can add new network setting
  mainnet: {
    url: `https://eth-mainnet.alchemyapi.io/v2/${providerApiKey}`,
    finder: "0x40f941E48A552bF496B154Af6bf55725f18D77c3",
  },
  sepolia: {
    url: `https://eth-sepolia.g.alchemy.com/v2/${providerApiKey}`,
    finder: "",
  },
  goerli: {
    url: `https://eth-goerli.alchemyapi.io/v2/${providerApiKey}`,
    finder: "",
  },
  arbitrum: {
    url: `https://arb-mainnet.g.alchemy.com/v2/${providerApiKey}`,
    finder: "0xB0b9f73B424AD8dc58156C2AE0D7A1115D1EcCd1",
  },
  arbitrumGoerli: {
    url: `https://arb-goerli.g.alchemy.com/v2/${providerApiKey}`,
    finder: "",
  },
  optimism: {
    url: `https://opt-mainnet.g.alchemy.com/v2/${providerApiKey}`,
    finder: "0x278d6b1aA37d09769E519f05FcC5923161A8536D",
  },
  optimismGoerli: {
    url: `https://opt-goerli.g.alchemy.com/v2/${providerApiKey}`,
    finder: "",
  },
  polygon: {
    url: `https://polygon-mainnet.g.alchemy.com/v2/${providerApiKey}`,
    finder: "0x09aea4b2242abC8bb4BB78D537A67a245A7bEC64",
  },
  polygonMumbai: {
    url: `https://polygon-mumbai.g.alchemy.com/v2/${providerApiKey}`,
    finder: "",
  },
  polygonZkEvm: {
    url: `https://polygonzkevm-mainnet.g.alchemy.com/v2/${providerApiKey}`,
    finder: "",
  },
  polygonZkEvmTestnet: {
    url: `https://polygonzkevm-testnet.g.alchemy.com/v2/${providerApiKey}`,
    finder: "",
  },
  zkSyncTestnet: {
    url: "https://testnet.era.zksync.dev",
    finder: "",
  },
  zkSync: {
    url: "https://mainnet.era.zksync.io",
    finder: "",
  },
  gnosis: {
    url: "https://rpc.gnosischain.com",
    finder: "",
  },
  chiado: {
    url: "https://rpc.chiadochain.net",
    finder: "",
  },
  base: {
    url: "https://mainnet.base.org",
    finder: "",
  },
  baseGoerli: {
    url: "https://goerli.base.org",
    finder: "",
  },
  scrollSepolia: {
    url: "https://sepolia-rpc.scroll.io",
    finder: "",
  },
};

async function main() {
  // console.log(Object.keys(networks))
  Object.keys(networks)
    .filter(network => networks[network].finder !== "")
    .map(async networkKey => {
      const networkConfig = networks[networkKey];
      const provider = new ethers.providers.JsonRpcProvider(networkConfig.url);
      const findercontract = new Contract(networkConfig.finder, finderInterfaceAbi, provider);
      const oov3Address = await findercontract.getImplementationAddress(
        "0x4f7074696d69737469634f7261636c6556330000000000000000000000000000",
      );
      const oov3Contract = new Contract(oov3Address, oov3InterfaceAbi, provider);
      const collateralWhitelistAddress = await findercontract.getImplementationAddress(
        "0x436f6c6c61746572616c57686974656c69737400000000000000000000000000",
      );
      const addressWhitelistContract = new Contract(collateralWhitelistAddress, addressWhitelistAbi, provider);
      const currencyAddressArray = await addressWhitelistContract.getWhitelist();
      const validBonds: any[] = [];
      await Promise.all(
        currencyAddressArray.map(async (addr: string) => {
          const _minBond = await oov3Contract.getMinimumBond(addr);
          const currencyContract = new Contract(addr, ierc20MetadataAbi, provider);
          if (_minBond.toBigInt() > BigInt(0)) {
            const _symbol = await currencyContract.symbol();
            const _decimals = await currencyContract.decimals();
            const _deno = 10n ** BigInt(_decimals);
            validBonds.push({
              bond: `${(_minBond.toBigInt() / _deno).toString()} ${_symbol}`,
              raw_bond: _minBond.toBigInt(),
              decimals: _decimals,
              symbol: _symbol,
            });
          }
        }),
      );
      console.log({
        networkKey,
        validBonds,
      });
    });
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
