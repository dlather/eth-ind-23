import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import ProviderCard from "./providerCard";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

type ResultObject = Record<string, string[]>;

function useGetContestAddresses() {
  const operatorAddress = (useSearchParams() as ReadonlyURLSearchParams).get("operatorAddress");
  const { data: operatorContestsIds } = useScaffoldContractRead({
    contractName: "Operators",
    functionName: "getAllContests",
    args: [operatorAddress as string],
  });
  const { data: essentialContestDataOptions } = useScaffoldContractRead({
    contractName: "OptionsContestFactory",
    functionName: "getAllContestsDetails",
    args: [operatorContestsIds],
  });
  const { data: essentialContestDataYesNo } = useScaffoldContractRead({
    contractName: "YesNoContestFactory",
    functionName: "getAllContestsDetails",
    args: [operatorContestsIds],
  });
  const filteredessentialContestDataOptions =
    essentialContestDataOptions === undefined
      ? []
      : essentialContestDataOptions.filter(x => x.contestAddress !== "0x0000000000000000000000000000000000000000");
  const filteredessentialContestDataYesNo =
    essentialContestDataYesNo === undefined
      ? []
      : essentialContestDataYesNo.filter(x => x.contestAddress !== "0x0000000000000000000000000000000000000000");
  const allContests = [...filteredessentialContestDataOptions, ...filteredessentialContestDataYesNo];
  const resultObject: ResultObject = (allContests ?? []).reduce((result, { contestAddress, dataId }) => {
    //@ts-ignore
    if (!result[dataId]) {
      //@ts-ignore
      result[dataId] = [];
    }
    //@ts-ignore
    result[dataId].push(contestAddress);
    return result;
  }, {});
  return resultObject;
}

const PlayHomeComponent = () => {
  const contestsResult = useGetContestAddresses();
  console.log(contestsResult);
  const configuredNetwork = getTargetNetwork();
  return (
    <div className="join-vertical mb-20 pt-2 mx-auto w-full md:max-w-lg bg-white h-screen">
      {Object.keys(contestsResult ?? []).map(provKey => {
        return (
          <ProviderCard
            currencySymbol={configuredNetwork.nativeCurrency.symbol.toString()}
            key={provKey}
            dataId={provKey}
            contestIds={contestsResult[provKey]}
          />
        );
      })}
    </div>
  );
};

export default PlayHomeComponent;
