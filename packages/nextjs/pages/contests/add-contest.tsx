"use client";

import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { NextPage } from "next";
import CustomCenter, { CustomLoading } from "~~/components/CustomCommons";
import AddContestForm from "~~/components/forms/add-contest";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { getTargetNetwork } from "~~/utils/scaffold-eth";

const AddContest: NextPage = () => {
  const dataId = (useSearchParams() as ReadonlyURLSearchParams).get("dataId");
  const { data: dataIdDetails } = useScaffoldContractRead({
    contractName: "Provider",
    functionName: "getDataIdDetails",
    args: [dataId as `0x${string}`],
  });

  return dataIdDetails === undefined ? (
    <CustomLoading />
  ) : dataIdDetails.dataDetails.template === "YES_NO_PROVIDER_TEMPLATE" ? (
    <LAddContestYesNoFormWrapper dataId={dataIdDetails.dataId} />
  ) : (
    <LAddContestOptionsFormWrapper dataId={dataIdDetails.dataId} />
  );
};

const LAddContestYesNoFormWrapper = ({ dataId }: { dataId: `0x${string}` }) => {
  const configuredNetwork = getTargetNetwork();
  const { data: configuredTemplateBytes, isLoading: lconfiguredTemplateBytes } = useScaffoldContractRead({
    contractName: "YesNoProviderTemplate",
    functionName: "getConfiguredTemplate",
    args: [dataId as `0x${string}`],
  });
  const { data: configuredTemplate, isLoading: lconfiguredTemplate } = useScaffoldContractRead({
    contractName: "YesNoProviderTemplate",
    functionName: "decode",
    args: [configuredTemplateBytes],
  });

  if (lconfiguredTemplate || lconfiguredTemplateBytes) {
    return <></>;
  }

  if (dataId == null) {
    return <CustomCenter>Invalid Data Id</CustomCenter>;
  }
  if (configuredTemplate === undefined || configuredTemplate === null) {
    return <CustomCenter>No Template Data found</CustomCenter>;
  }
  return (
    <AddContestForm
      isYesNoTemplate={true}
      currencySymbol={configuredNetwork.nativeCurrency.symbol.toString()}
      dataId={dataId}
      //@ts-expect-error
      configuredTemplate={configuredTemplate}
    />
  );
};

const LAddContestOptionsFormWrapper = ({ dataId }: { dataId: `0x${string}` }) => {
  const configuredNetwork = getTargetNetwork();
  const { data: configuredTemplateBytes, isLoading: lconfiguredTemplateBytes } = useScaffoldContractRead({
    contractName: "OptionsProviderTemplate",
    functionName: "getConfiguredTemplate",
    args: [dataId as `0x${string}`],
  });
  const { data: configuredTemplate, isLoading: lconfiguredTemplate } = useScaffoldContractRead({
    contractName: "OptionsProviderTemplate",
    functionName: "decode",
    args: [configuredTemplateBytes],
  });

  if (lconfiguredTemplate || lconfiguredTemplateBytes) {
    return <></>;
  }

  if (dataId == null) {
    return <CustomCenter>Invalid Data Id</CustomCenter>;
  }
  if (configuredTemplate === undefined || configuredTemplate === null) {
    return <CustomCenter>No Template Data found</CustomCenter>;
  }
  return (
    <AddContestForm
      isYesNoTemplate={false}
      currencySymbol={configuredNetwork.nativeCurrency.symbol.toString()}
      dataId={dataId}
      //@ts-expect-error
      configuredTemplate={configuredTemplate}
    />
  );
};

export default AddContest;
