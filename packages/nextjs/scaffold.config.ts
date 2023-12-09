import * as chains from "wagmi/chains";

export type ScaffoldConfig = {
  targetNetwork: chains.Chain;
  pollingInterval: number;
  alchemyApiKey: string;
  faceWalletApiKey: string;
  faceWalletApiKeyProd: string;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
  walletAutoConnect: boolean;
};

const scaffoldConfig = {
  // The network where your DApp lives in
  // targetNetwork: process.env.IS_LOCAL_CHAIN ? chains.hardhat : chains.goerli,
  // targetNetwork: chains.hardhat,
  targetNetwork: chains.goerli,

  // The interval at which your front-end polls the RPC servers for new data
  // it has no effect on the local network
  pollingInterval: 30000,

  // This is ours Alchemy's default API key.
  // You can get your own at https://dashboard.alchemyapi.io
  // It's recommended to store it in an env variable:
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF",
  faceWalletApiKeyProd:
    process.env.FACE_WALLET_API_KEY_PROD ||
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCQkeAZTVhLxDoRWreqsl1j_LKjal067zo5NirGhsmDgwkTbD3a1h0TOWEmr1E-XasWqY0wZFpSl_Y6wonknU87TzPOBH1f56A7f5br0zAF9kVVeFEAeUhSZYWuont30l2cYTuhjhGp6ruIOxH0d0Jwv6Kxnpub_AzErrU6NKJQkQIDAQAB",
  faceWalletApiKey:
    process.env.FACE_WALLET_API_KEY ||
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC-Tdjm7BxXU7gm-J6uQWvyqcjL44BWOtNyth5TWBhM1MuXcFT6pJAF5fll9H2_lZO4hyYUnD2q1gUN91Ns8TUNWyTqgHHCD1YQA0vWQWIhBKeBEL8jqhLzmFOxi2OUyiNLGBF87IcacIkkEEt0NpwQf4fjOPV4ToNhXROTwH8eowIDAQAB",

  // This is ours WalletConnect's default project ID.
  // You can get your own at https://cloud.walletconnect.com
  // It's recommended to store it in an env variable:
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",

  // Only show the Burner Wallet when running on hardhat network
  onlyLocalBurnerWallet: true,

  /**
   * Auto connect:
   * 1. If the user was connected into a wallet before, on page reload reconnect automatically
   * 2. If user is not connected to any wallet:  On reload, connect to burner wallet if burnerWallet.enabled is true && burnerWallet.onlyLocal is false
   */
  walletAutoConnect: true,
} satisfies ScaffoldConfig;

export default scaffoldConfig;
