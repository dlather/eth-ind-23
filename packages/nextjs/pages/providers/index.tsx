import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import type { NextPage } from "next";
import ShowMoreText from "react-show-more-text";
import {
  BanknotesIcon,
  ClockIcon,
  EllipsisHorizontalCircleIcon,
  ReceiptPercentIcon,
  WalletIcon,
} from "@heroicons/react/24/outline";
import { CustomLoading } from "~~/components/CustomCommons";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

const Providers: NextPage = () => {
  const { data: providersData } = useScaffoldContractRead({
    contractName: "Provider",
    functionName: "getAllDataIdDetails",
  });
  const { data: supportedCurrencies } = useScaffoldContractRead({
    contractName: "Provider",
    functionName: "getSupportedCurrencies",
  });
  console.log(providersData);
  return providersData === undefined || supportedCurrencies === undefined ? (
    <CustomLoading />
  ) : providersData.length > 0 ? (
    <>
      <div className="join-vertical mb-40 mx-auto">
        {providersData.map(data => {
          return data.dataDetails.template === "YES_NO_PROVIDER_TEMPLATE" ? (
            <LYesNoProviderTemplateWrapper data={data} dataId={data.dataId} supportedCurrencies={supportedCurrencies} />
          ) : (
            <LOptionsProviderTemplateWrapper
              data={data}
              dataId={data.dataId}
              supportedCurrencies={supportedCurrencies}
            />
          );
          // <LProviderCard data={data} supportedCurrencies={supportedCurrencies} />
        })}
      </div>
      <Link href={"/providers/add-provider"} passHref className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <button className="py-2 px-4 btn-primary btn btn-wide">Add Provider</button>
      </Link>
    </>
  ) : (
    <>
      <div className="h-screen flex items-center justify-center">No Providers Found</div>
      <Link href={"/providers/add-provider"} passHref className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <button className="py-2 px-4 btn-primary btn btn-wide">Add Provider</button>
      </Link>
    </>
  );
};

const LYesNoProviderTemplateWrapper = ({
  dataId,
  data,
  supportedCurrencies,
}: {
  dataId: `0x${string}`;
  data: any;
  supportedCurrencies:
    | readonly {
        _symbol: string;
        _address: string;
        _uint: bigint;
      }[]
    | undefined;
}) => {
  const { data: dataIdDetailsBytes } = useScaffoldContractRead({
    contractName: "YesNoProviderTemplate",
    functionName: "getConfiguredTemplate",
    args: [dataId],
  });
  const { data: dataIdOptions } = useScaffoldContractRead({
    contractName: "YesNoProviderTemplate",
    functionName: "decode",
    args: [dataIdDetailsBytes],
  });
  return dataIdOptions === undefined ? (
    <></>
  ) : (
    <LProviderCard
      dataIdOptions={(
        dataIdOptions as readonly {
          id: `0x${string}`;
          name: string;
        }[]
      )
        .map(d => d.name)
        .join(" / ")}
      data={data}
      supportedCurrencies={supportedCurrencies}
    />
  );
};

const LOptionsProviderTemplateWrapper = ({
  dataId,
  data,
  supportedCurrencies,
}: {
  dataId: `0x${string}`;
  data: any;
  supportedCurrencies:
    | readonly {
        _symbol: string;
        _address: string;
        _uint: bigint;
      }[]
    | undefined;
}) => {
  const { data: dataIdDetailsBytes } = useScaffoldContractRead({
    contractName: "OptionsProviderTemplate",
    functionName: "getConfiguredTemplate",
    args: [dataId],
  });
  const { data: dataIdOptions } = useScaffoldContractRead({
    contractName: "OptionsProviderTemplate",
    functionName: "decode",
    args: [dataIdDetailsBytes],
  });
  return dataIdOptions === undefined ? (
    <></>
  ) : (
    <LProviderCard
      dataIdOptions={(
        dataIdOptions as readonly {
          id: `0x${string}`;
          name: string;
          symbol: string;
          ipfsHash: string;
        }[]
      )
        .map(d => d.name)
        .join(" / ")}
      data={data}
      supportedCurrencies={supportedCurrencies}
    />
  );
};

const LProviderCard = ({
  data,
  supportedCurrencies,
  dataIdOptions,
}: {
  data: any;
  dataIdOptions: string;
  supportedCurrencies:
    | readonly {
        _symbol: string;
        _address: string;
        _uint: bigint;
      }[]
    | undefined;
}): React.JSX.Element => {
  return (
    <div key={data.dataId} className="bg-white my-4 mx-2 px-2 pt-4 border rounded-lg">
      <div className="flex flex-wrap">
        <div className="flex py-0 mt-2">
          <div className="avatar ">
            <div className="w-20 flex-none rounded">
              <img
                src={`https://amethyst-fancy-wolf-915.mypinata.cloud/ipfs/${data.dataDetails.imageIpfsHash}?pinataGatewayToken=2gf5MglpDj-DPCuNarfOduhFnMCUuolJrtO6Xmj3_f7AfeyS0uMGrXFdJein78xx`}
              />
            </div>
          </div>
          <h3 className="text-xl px-2 flex-1 font-semibold">{data.dataDetails.name}</h3>
        </div>
      </div>
      <p className="flex-1 flex my-0 mt-2 pt-2 font-medium">
        <BanknotesIcon className="w-6 h-6 mr-1 stroke-primary inline" />
        <p className="flex-1 my-0 inline font-bold">Bond Amount</p>
        <span className="text-primary font-bold mr-2 flex-none">
          {data.providerDetails.bond.toString()}{" "}
          {supportedCurrencies?.find(curr => curr._address == data.providerDetails.currency)?._symbol ?? ""}
        </span>
      </p>
      <p className="flex-1 flex my-0 pt-2 font-medium">
        <ReceiptPercentIcon className="w-6 h-6 mr-1 stroke-primary inline" />
        <p className="flex-1 my-0 inline font-bold">Provider Fee</p>
        <span className="text-primary font-bold mr-2 flex-none">
          {`${
            parseInt(((data.providerDetails.fee.fee * BigInt(10000)) / data.providerDetails.fee.decimals).toString()) /
            100
          } %`}
        </span>
      </p>
      {dataIdOptions === "" ? null : (
        <p className="flex-1 flex my-0 pt-2 font-medium">
          <EllipsisHorizontalCircleIcon className="w-6 h-6 mr-1 stroke-primary inline" />
          <p className="flex-1 my-0 inline font-bold">Options</p>
          <span className="text-primary font-bold mr-2 flex-none">{dataIdOptions}</span>
        </p>
      )}
      <div className="x-overflow-scroll mt-2">
        <ShowMoreText
          lines={2}
          more={<p className="text-primary font-bold inline">Show more</p>}
          less={<p className="text-secondary font-bold inline">Show less</p>}
          className="flex-1 my-1 font-medium"
          anchorClass="show-more-less-clickable"
          onClick={() => console.log("onclick show more")}
          expanded={false}
          truncatedEndingComponent={"... "}
        >
          <p>
            Description: <span className="font-normal">{data.dataDetails.description}</span>
          </p>
          <p className="flex-1 flex my-0 pt-2 font-medium">
            <ClockIcon className="w-6 h-6 mr-1 stroke-primary inline" />
            <p className="flex-1 my-0 inline font-bold">End Time</p>
            <span className="text-primary font-bold mr-2 flex-none">
              {`${dayjs(parseInt(data.providerDetails.endTimeStamp.toString()) * 1000).format("lll")}`}
            </span>
          </p>
          <p className="flex-1 flex my-0 pt-2 font-medium">
            <ClockIcon className="w-6 h-6 mr-1 stroke-primary inline" />
            <p className="flex-1 my-0 inline font-bold">Assertion Liveness</p>
            <span className="text-primary font-bold mr-2 flex-none">
              {(data.providerDetails.assertionLiveness / BigInt(3600)).toString()} hour{" "}
              {(data.providerDetails.assertionLiveness / BigInt(60)).toString()} mins
            </span>
          </p>
          <p className="flex-1 flex my-0 pt-2 font-medium break-all">
            <WalletIcon className="w-6 h-6 mr-1 stroke-primary inline" />
            <p className="flex-1 my-0 inline font-bold ">
              Provider{" "}
              <span className="text-primary font-bold mr-2 break-all flex-none">
                {data.providerDetails.providerAddress}
              </span>
            </p>
          </p>
        </ShowMoreText>
      </div>
      <div className="flex flex-row justify-between pr-4 pb-2 pt-4">
        <Link href={`/contests/add-contest?dataId=${data.dataId}`} passHref className="text-secondary ml-4">
          <span>Create Contest</span>
        </Link>
        <Link href={`/providers/assert-data?dataId=${data.dataId}`} passHref className="text-secondary ml-4">
          <span>Assert Data</span>
        </Link>
        <Link href={`/contests?dataId=${data.dataId}`} passHref className="text-secondary ml-4">
          <span>All Contests</span>
        </Link>
      </div>
    </div>
  );
};

export default Providers;
