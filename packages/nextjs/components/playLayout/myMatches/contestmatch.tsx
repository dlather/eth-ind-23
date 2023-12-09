import { formatEther } from "viem";
import { useAccount } from "wagmi";
import { CustomLoading } from "~~/components/CustomCommons";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

const ContestCardMatch = ({
  contestAddress,
  providerOptions,
  isResolved,
}: {
  contestAddress: string;
  isResolved: boolean;
  providerOptions: readonly {
    id: `0x${string}`;
    symbol: string;
  }[];
}) => {
  const { address } = useAccount();
  const configuredNetwork = getTargetNetwork();
  const { data: completeData, isLoading: lcompleteData } = useScaffoldContractRead({
    contractName: "BaseOptionsContest",
    functionName: "getCompleteContestData",
    address: contestAddress ?? "",
  });
  const { data: contestData } = useScaffoldContractRead({
    contractName: "BaseOptionsContest",
    functionName: "getContestData",
    address: contestAddress,
  });
  const { data: userWinning } = useScaffoldContractRead({
    contractName: "BaseOptionsContest",
    functionName: "winnings",
    args: [address],
    address: contestAddress,
  });
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "BaseOptionsContest",
    functionName: "withdrawWinningAmount",
    address: contestAddress,
    onBlockConfirmation: (txnReceipt: { blockHash: any }) => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  if (completeData === undefined) {
    return null;
  }
  // TODO:how provider and operator withdraw
  const userBets = completeData.data.filter(cData => cData?.betPlaced?.userAddress == address);

  return contestData ? (
    lcompleteData ? (
      <CustomLoading />
    ) : completeData ? (
      completeData.winnersResolved == isResolved ? (
        isResolved ? (
          userWinning && userWinning > 0 ? (
            <div className="border-solid rounded-md mx-2 py-2 px-2 border-2 ">
              <div className="flex pb-2">
                <p className="flex-1 my-0 font-medium">
                  Entry Fee:{" "}
                  <span className="text-primary">
                    {formatEther(contestData.fee)} {configuredNetwork.nativeCurrency.symbol.toString()}
                  </span>
                </p>
                <p className="pl-6 my-0 flex-none font-medium mx-2">
                  Spots: <span className="text-primary">{contestData.spots.toString()}</span>
                </p>
              </div>
              <p className="m-0 py-2 font-medium">
                Winning:{" "}
                <span className="text-primary">
                  {formatEther(userWinning)} {configuredNetwork.nativeCurrency.symbol.toString()}
                </span>
              </p>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => {
                    console.log(userWinning);
                    writeAsync();
                  }}
                  className="btn-primary my-2 btn-sm btn-wide btn font-medium mr-2"
                >
                  Withdraw
                </button>
              </div>
            </div>
          ) : null
        ) : userBets && userBets.length > 0 ? (
          <div className="border-solid rounded-md mx-2 py-2 px-2 my-2 border-2 ">
            <div className="flex pb-2">
              <p className="flex-1 my-0 font-medium">
                Entry Fee:{" "}
                <span className="text-primary">
                  {formatEther(contestData.fee)} {configuredNetwork.nativeCurrency.symbol.toString()}
                </span>
              </p>
              <p className="pl-6 my-0 flex-none font-medium mx-2">
                Spots: <span className="text-primary">{contestData.spots.toString()}</span>
              </p>
            </div>
            {userBets.map(betWithWinning => {
              return (
                <BetCard
                  key={betWithWinning.betPlaced.betId}
                  providerOptions={providerOptions}
                  betWithWinning={betWithWinning}
                />
              );
            })}
          </div>
        ) : null
      ) : null
    ) : null
  ) : null;
};

const BetCard = ({
  betWithWinning,
  providerOptions,
}: {
  providerOptions: readonly {
    id: `0x${string}`;
    symbol: string;
  }[];
  betWithWinning: {
    winning: bigint;
    betPlaced: {
      betId: `0x${string}`;
      optionsSelected: readonly `0x${string}`[];
      userAddress: string;
      operatorAddress: string;
    };
  };
}) => {
  console.log(providerOptions);
  return (
    <div className="mb-2 py-0 px-2 border-solid rounded-md border-1">
      <p className="font-medium mb-1">
        Bet Id:{" "}
        <span className="text-primary">
          {betWithWinning.betPlaced.betId.slice(0, 10)}......
          {betWithWinning.betPlaced.betId.slice(
            betWithWinning.betPlaced.betId.length - 10,
            betWithWinning.betPlaced.betId.length,
          )}
        </span>
      </p>
      <div className="flex py-0 mt-0">
        <p className="flex-1 my-0 font-medium">
          Option Selected:{" "}
          <span className="text-primary">
            {betWithWinning.betPlaced.optionsSelected.map(oSelected => {
              return providerOptions.find(pOption => pOption.id == oSelected)?.symbol;
            })}
          </span>
        </p>
        {/* <p className="pl-6 my-0 flex-none">
              Commision: <span className="text-primary">{opeartorFee + providerFee}%</span>
            </p> */}
      </div>
    </div>
  );
};

export default ContestCardMatch;
