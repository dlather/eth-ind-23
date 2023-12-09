import { memo } from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import { formatEther } from "viem";
import BetForm from "~~/components/forms/bet-form";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const ContestCard = memo(
  ({
    contestAddress,
    providerFee,
    providerOptions,
    isYesNoTemplate,
    currencySymbol,
  }: {
    currencySymbol: string;
    isYesNoTemplate: boolean;
    contestAddress: string;
    providerFee: number;
    providerOptions: readonly {
      id: `0x${string}`;
      symbol: string;
    }[];
  }) => {
    isYesNoTemplate ? null : null;
    const { data: contestData } = useScaffoldContractRead({
      contractName: "BaseOptionsContest",
      functionName: "getContestData",
      address: contestAddress,
    });
    const { data: completeData } = useScaffoldContractRead({
      contractName: "BaseOptionsContest",
      functionName: "getCompleteContestData",
      address: contestAddress ?? "",
    });
    const operatorAddress = (useSearchParams() as ReadonlyURLSearchParams).get("operatorAddress");
    const { data: operatorFeeObj } = useScaffoldContractRead({
      contractName: "Operators",
      functionName: "getOperatorFee",
      args: [operatorAddress as string, contestData?.id],
    });
    const opeartorFee =
      operatorFeeObj && operatorFeeObj.fee !== 0n
        ? parseInt(((operatorFeeObj.fee * BigInt(10000)) / operatorFeeObj.decimals).toString()) / 100
        : 0;
    const spotsFilled = completeData === undefined ? 0 : (completeData.data as unknown as any[]).length;
    const optionsPercent =
      completeData === undefined
        ? null
        : providerOptions.map(pOption => {
            return {
              optionSymbol: pOption.symbol,
              selectionPercentage:
                spotsFilled === 0
                  ? 0
                  : (
                      (completeData.data.filter(cData => cData.betPlaced.optionsSelected[0] === pOption.id).length *
                        100) /
                      spotsFilled
                    ).toFixed(0),
            };
          });
    return contestData && parseInt(contestData.stopTimeStamp.toString()) * 1000 > Date.now() ? (
      <div className="mx-2 mb-4 py-2 px-2 border-solid rounded-md border-2">
        <div className="flex py-0 mt-2">
          <p className="flex-1 my-0 font-medium">
            Entry Fee:{" "}
            <span className="text-primary">
              {formatEther(contestData.fee)} {currencySymbol}
            </span>
          </p>
          <p className="pl-6 my-0 flex-none">
            Commision: <span className="text-primary">{opeartorFee + providerFee}%</span>
          </p>
        </div>
        {contestData.count === 1n && optionsPercent ? (
          <div className="flex py-0 mt-2">
            <p className="flex-1 my-0 font-medium">Current Bets: </p>
            {optionsPercent.map(opPer => {
              return (
                <p key={opPer.optionSymbol} className="my-0 mx-1 flex-none">
                  {opPer.optionSymbol}: <span className="text-primary">{opPer.selectionPercentage}%</span>
                </p>
              );
            })}
          </div>
        ) : null}
        <div className="flex py-0 mt-2 mb-0 items-center justify-center">
          <progress
            className="progress progress-primary flex-1 "
            value={spotsFilled}
            max={contestData.spots as unknown as number}
          ></progress>
          <p className="pl-4 flex-none">Spots: {`${spotsFilled} / ${contestData.spots}`}</p>
        </div>
        <p className="my-2">{`Contest ends at ${dayjs(parseInt(contestData.stopTimeStamp.toString()) * 1000).format(
          "lll",
        )}`}</p>
        {spotsFilled == (contestData.spots as unknown as number) ? null : (
          <>
            <BetForm
              count={Number(contestData.count)}
              providerOptions={providerOptions}
              contestAddress={contestAddress}
              fee={contestData.fee}
            />
          </>
        )}
      </div>
    ) : (
      <div></div>
    );
  },
);

ContestCard.displayName = "ContestCard";

export default ContestCard;
