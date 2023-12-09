import { useState } from "react";
import React from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import ProviderCardMatches from "./providerMatch";
import { BanknotesIcon, SquaresPlusIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

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
  const resultObject: ResultObject = (allContests ?? []).reduce(
    (result: { [x: string]: any[] }, { contestAddress, dataId }: any) => {
      //@ts-ignore
      if (!result[dataId]) {
        //@ts-ignore
        result[dataId] = [];
      }
      //@ts-ignore
      result[dataId].push(contestAddress);
      return result;
    },
    {},
  );
  return resultObject;
}

const tabConfig = [
  {
    icon: <SquaresPlusIcon />,
    title: "Live Bets",
  },
  {
    icon: <BanknotesIcon />,
    title: "Winnings",
  },
];

const PlayMyMatches = () => {
  const [tabIndex, settabIndex] = useState(0);
  const contestsResult = useGetContestAddresses();

  const tabComponents = [
    <div key="tab1" className="join-vertical mb-20">
      {Object.keys(contestsResult).map(provKey => {
        return (
          <ProviderCardMatches isResolved={false} key={provKey} dataId={provKey} contestIds={contestsResult[provKey]} />
        );
      })}
    </div>,
    <div key="tab2" className="join-vertical mb-20">
      {Object.keys(contestsResult).map(provKey => {
        return (
          <ProviderCardMatches isResolved={true} key={provKey} dataId={provKey} contestIds={contestsResult[provKey]} />
        );
      })}
    </div>,
  ];
  return (
    <div className="bg-white h-screen">
      <div className="tabs font-medium tabs-boxed bg-white flex py-4 ">
        {tabConfig.map((config, i) => {
          return (
            <a
              key={config.title}
              className={i === tabIndex ? "tab-active text-primary tab flex-1" : "tab flex-1"}
              onClick={() => settabIndex(i)}
            >
              {React.cloneElement(config.icon, {
                className: i === tabIndex ? "w-6 h-6" : "w-5 h-5",
              })}
              <span className="pl-2 text-lg ">{config.title}</span>
            </a>
          );
        })}
      </div>
      <div className="">{tabComponents[tabIndex]}</div>
    </div>
  );
};

export default PlayMyMatches;
