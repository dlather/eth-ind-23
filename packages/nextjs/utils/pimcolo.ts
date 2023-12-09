import { createSmartAccountClient } from "permissionless";
import { privateKeyToSafeSmartAccount } from "permissionless/accounts";
import { createPimlicoBundlerClient, createPimlicoPaymasterClient } from "permissionless/clients/pimlico";
import { createPublicClient, getContract, http, parseEther } from "viem";
import { generatePrivateKey } from "viem/accounts";
import { goerli } from "viem/chains";

// DEFINE THE CONSTANTS
const privateKey = generatePrivateKey(); // replace this with a private key you generate!
const apiKey = "bfae6c68-0cc5-4330-af84-aa5ecae7bcb2"; // replace with your Pimlico API key
const infuraKey = "90c9efd8a00149ad934670814aafcbe9";
const chain = "goerli";

export const publicClient = createPublicClient({
  transport: http(`https://${chain}.infura.io/v3/${infuraKey}`),
});

export const paymasterClient = createPimlicoPaymasterClient({
  transport: http(`https://api.pimlico.io/v2/${chain}/rpc?apikey=${apiKey}`),
});

const safeAccount = await privateKeyToSafeSmartAccount(publicClient, {
  privateKey: privateKey,
  safeVersion: "1.4.1",
  entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789", // global entrypoint
  saltNonce: 0n, // optional
});
console.log(safeAccount);

const smartAccountClient = createSmartAccountClient({
  account: safeAccount,
  chain: goerli,
  transport: http(`https://api.pimlico.io/v1/${chain}/rpc?apikey=${apiKey}`),
  sponsorUserOperation: paymasterClient.sponsorUserOperation, // optional
});

export const bundlerClient = createPimlicoBundlerClient({
  transport: http(`https://api.pimlico.io/v1/${chain}/rpc?apikey=${apiKey}`),
});

const gasPrices = await bundlerClient.getUserOperationGasPrice();

console.log(gasPrices);

export const executeTransaction = async () => {
  const txHash = await smartAccountClient.sendTransaction({
    to: "0xFf88EDdF4d7804a8505456c2e72BD3b39BBcF8B6", // Yes
    value: parseEther("0.01"),
    maxFeePerGas: gasPrices.fast.maxFeePerGas, // if using Pimlico
    maxPriorityFeePerGas: gasPrices.fast.maxPriorityFeePerGas, // if using Pimlico
  });

  alert(txHash);
};

export const resolveWinnersAnon = async ({
  contractAbi,
  contractAddress,
}: {
  contractAbi: any;
  contractAddress: string;
}) => {
  const nftContract = getContract({
    address: contractAddress,
    abi: contractAbi,
    publicClient,
    walletClient: smartAccountClient,
    // @ts-ignore
    maxFeePerGas: gasPrices.fast.maxFeePerGas, // if using Pimlico
    maxPriorityFeePerGas: gasPrices.fast.maxPriorityFeePerGas, // if using Pimlico
  });
  const x = await nftContract.simulate.resolveContest([]);
  console.log(x);
  const txHash = await nftContract.write.resolveContest([]);
  alert(`https://goerli.etherscan.io/tx/${txHash}`);
};
