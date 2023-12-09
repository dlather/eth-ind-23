"use client";

import React from "react";
import CustomCenter, { CustomLoading } from "~~/components/CustomCommons";
import AddProviderForm from "~~/components/forms/add-provider";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const AddProvider = () => {
  // TODO: Need to update
  // const { data: encodedTemplateData, isLoading: lencodedTemplateData } = useScaffoldContractRead({
  //   contractName: "OptionsProviderTemplate",
  //   functionName: "encode",
  //   args: [YES_NO_QUERY.Options],
  // });
  const { data: supportedCurrencies } = useScaffoldContractRead({
    contractName: "Provider",
    functionName: "getSupportedCurrencies",
  });

  return supportedCurrencies === undefined ? (
    <CustomLoading />
  ) : supportedCurrencies.length === 0 ? (
    <CustomCenter>No Supported Currency Found</CustomCenter>
  ) : (
    <AddProviderForm
      supportedCurrencies={supportedCurrencies}
      // encodedTemplateData={encodedTemplateData as `0x${string}`}
    />
  );
};

export default AddProvider;
