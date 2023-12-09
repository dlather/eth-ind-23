import Link from "next/link";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import dayjs from "dayjs";
import { NextPage } from "next";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import CustomCenter, { CustomLoading } from "~~/components/CustomCommons";
import AddOperatorFeeForm from "~~/components/forms/add-operator-fee";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

const Contests: NextPage = () => {
  const dataId = (useSearchParams() as ReadonlyURLSearchParams).get("dataId");
  const configuredNetwork = getTargetNetwork();
  const { data: dataIdDetails, isLoading: ldataIdDetails } = useScaffoldContractRead({
    contractName: "Provider",
    functionName: "getDataIdDetails",
    args: [dataId as `0x${string}`],
  });
  const { data: contestsDataOptions, isLoading: lcontestsDataOptions } = useScaffoldContractRead({
    contractName: "OptionsContestFactory",
    functionName: "getContestsByDataId",
    args: [dataId as `0x${string}`],
  });
  const { data: contestsDataYesNo, isLoading: lcontestsDataYesNo } = useScaffoldContractRead({
    contractName: "YesNoContestFactory",
    functionName: "getContestsByDataId",
    args: [dataId as `0x${string}`],
  });

  if (ldataIdDetails || lcontestsDataOptions || lcontestsDataYesNo) {
    return <CustomLoading />;
  }

  if (dataIdDetails === undefined) {
    return <CustomCenter>Invalid Data Id</CustomCenter>;
  }

  const contestsData =
    dataIdDetails.dataDetails.template === "YES_NO_PROVIDER_TEMPLATE" ? contestsDataYesNo : contestsDataOptions;

  return contestsData && contestsData.length > 0 ? (
    <>
      <div className="join-vertical mb-40 mx-auto h-screen">
        <h3 className="mt-6 px-2 mx-2 mb-4 font-semibold break-all">Contests for Data Id: {dataId}</h3>
        <p className="pl-4 mb-4 flex-1 font-medium">
          Provider Data Resolved:{" "}
          <span className="text-primary">{dataIdDetails.assertionDetails.resolved === false ? "No" : "Yes"}</span>
        </p>
        {contestsData.map(data => (
          <LocalContestCard
            currencySymbol={configuredNetwork.nativeCurrency.symbol}
            key={data.id}
            data={data}
            providerDataResolved={dataIdDetails.assertionDetails.resolved}
          />
        ))}
        <Link
          href={`/contests/add-contest?dataId=${dataId}`}
          passHref
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <button className="py-2 px-4 btn-primary btn btn-wide">Add Contest</button>
        </Link>
      </div>
    </>
  ) : (
    <>
      <div className="h-screen flex items-center justify-center">No Contests Found</div>
      <Link
        href={`/contests/add-contest?dataId=${dataId}`}
        passHref
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <button className="py-2 px-4 btn-primary btn btn-wide">Add Contest</button>
      </Link>
    </>
  );
};

const LocalContestCard = ({
  data,
  providerDataResolved,
  currencySymbol,
}: {
  currencySymbol: string;
  providerDataResolved: boolean;
  data: {
    dataId: `0x${string}`;
    contestAddress: string;
    id: `0x${string}`;
    count: bigint;
    validIds: readonly `0x${string}`[];
    fee: bigint;
    spots: bigint;
    stopTimeStamp: bigint;
  };
}) => {
  const { address } = useAccount();
  const { data: operatorFee } = useScaffoldContractRead({
    contractName: "Operators",
    functionName: "getOperatorFee",
    args: [address, data.id],
  });
  const { data: winnersResolved } = useScaffoldContractRead({
    contractName: "BaseOptionsContest",
    functionName: "winnersResolved",
    address: data.contestAddress,
  });

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "BaseOptionsContest",
    functionName: "resolveContest",
    address: data.contestAddress,
  });
  return (
    <div key={data.id} className="mx-2 mb-4 py-2 px-2 border-solid rounded-md border-2">
      <div className="flex py-0 mt-2">
        <p className="flex-1 my-0 font-medium">
          Entry Fee:{" "}
          <span className="text-primary">
            {formatEther(data.fee)} {currencySymbol}
          </span>
        </p>
        <p className="pl-6 my-0 flex-1 font-medium">
          Total Spots: <span className="text-primary">{data.spots.toString()}</span>
        </p>
      </div>
      <p className="my-2">{`Contest ends at ${dayjs(parseInt(data.stopTimeStamp.toString()) * 1000).format("lll")}`}</p>

      {operatorFee == undefined || operatorFee.fee === 0n ? (
        providerDataResolved === false ? (
          <AddOperatorFeeForm contestId={data.id} />
        ) : null
      ) : (
        <p className="my-0 flex-none font-medium">
          Your Commision: :{" "}
          <span className="text-primary">{`${
            parseInt(((operatorFee.fee * BigInt(10000)) / operatorFee.decimals).toString()) / 100
          } %`}</span>
        </p>
      )}
      <div className="flex flex-row justify-between pr-4 pb-2">
        {providerDataResolved ? (
          winnersResolved ? null : (
            <div className="flex mt-2 items-center justify-center">
              <button onClick={() => writeAsync()} className="btn btn-wide mx-4 btn-neutral">
                Resolve Winners
              </button>
            </div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default Contests;
