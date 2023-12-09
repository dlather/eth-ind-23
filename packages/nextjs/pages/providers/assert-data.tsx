import { useState } from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { createTsForm } from "@ts-react/form";
import { FormComponentMapping } from "@ts-react/form/lib/src/createSchemaForm";
import { NextPage } from "next";
import { z } from "zod";
import ConfirmModal, { closeConfirmModal, openConfirmModal } from "~~/components/ConfirmModal";
import CustomCenter, { CustomLoading } from "~~/components/CustomCommons";
import { FormContainer, NonNegativeBigIntFieldArray, Select } from "~~/components/CustomForm";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { IdNameType, NonnegativeNumberSchemaArray } from "~~/utils/common/ProviderTemplate";

const confirmModalIdOptions = "assert-provider-data-options";
const confirmModalIdYesNo = "assert-provider-data-yes-no";

const AssertData: NextPage = () => {
  const dataId = (useSearchParams() as ReadonlyURLSearchParams).get("dataId");

  const { data: dataIdDetails } = useScaffoldContractRead({
    contractName: "Provider",
    functionName: "getDataIdDetails",
    args: [dataId as `0x${string}`],
  });

  return dataIdDetails === undefined ? (
    <CustomLoading />
  ) : dataIdDetails.assertionDetails.resolved === true ? (
    <CustomCenter>Data Already Resolved</CustomCenter>
  ) : dataIdDetails.assertionDetails.asserter === "0x0000000000000000000000000000000000000000" ? (
    <>
      <p className="flex items-center justify-center ">{dataIdDetails.dataDetails.name}</p>
      {dataIdDetails.dataDetails.template === "YES_NO_PROVIDER_TEMPLATE" ? (
        <LYesNoProviderTemplateAssertWrapper dataId={dataIdDetails.dataId} />
      ) : (
        <LOptionsProviderTemplateAssertWrapper dataId={dataIdDetails.dataId} />
      )}
      ;
    </>
  ) : (
    <CustomCenter>Data Already asserted</CustomCenter>
  );
};

const LYesNoProviderTemplateAssertWrapper = ({ dataId }: { dataId: `0x${string}` }) => {
  const { data: dataIdDetailsBytes } = useScaffoldContractRead({
    contractName: "YesNoProviderTemplate",
    functionName: "getConfiguredTemplate",
    args: [dataId as `0x${string}`],
  });
  const { data: dataIdOptions } = useScaffoldContractRead({
    contractName: "YesNoProviderTemplate",
    functionName: "decode",
    args: [dataIdDetailsBytes],
  });
  return dataIdOptions === undefined ? (
    <></>
  ) : (
    <LFormAssertData
      dataId={dataId}
      isYesNoTemplate={true}
      dataIdOptions={(
        dataIdOptions as readonly {
          id: `0x${string}`;
          name: string;
        }[]
      ).map(x => ({ name: x.name, id: x.id } as IdNameType))}
    />
  );
};

const LOptionsProviderTemplateAssertWrapper = ({ dataId }: { dataId: `0x${string}` }) => {
  const { data: dataIdDetailsBytes } = useScaffoldContractRead({
    contractName: "OptionsProviderTemplate",
    functionName: "getConfiguredTemplate",
    args: [dataId as `0x${string}`],
  });
  const { data: dataIdOptions } = useScaffoldContractRead({
    contractName: "OptionsProviderTemplate",
    functionName: "decode",
    args: [dataIdDetailsBytes],
  });
  return dataIdOptions === undefined ? (
    <></>
  ) : (
    <LFormAssertData
      dataId={dataId}
      isYesNoTemplate={false}
      dataIdOptions={(
        dataIdOptions as readonly {
          id: `0x${string}`;
          name: string;
          symbol: string;
          ipfsHash: string;
        }[]
      ).map(x => ({ name: x.name, id: x.id } as IdNameType))}
    />
  );
};

const LFormAssertData = ({
  dataId,
  dataIdOptions,
  isYesNoTemplate,
}: {
  dataId: `0x${string}`;
  dataIdOptions: IdNameType[];
  isYesNoTemplate: boolean;
}) => {
  const [formDataOptions, setFormDataOptions] = useState<z.infer<typeof AssertDataSchemaOptions>>();
  const [formDataYesNo, setFormDataYesNo] = useState<z.infer<typeof AssertDataSchemaYesNo>>();
  const { data: encodedAssertionDataOptions } = useScaffoldContractRead({
    contractName: "OptionsProviderTemplate",
    functionName: "encodeAssertData",
    args: [
      formDataOptions?.points as unknown as {
        id: `0x${string}`;
        points: bigint;
      }[],
    ],
  });
  const { data: encodedAssertionDataYesNo } = useScaffoldContractRead({
    contractName: "YesNoProviderTemplate",
    functionName: "encodeAssertData",
    args: [formDataYesNo?.option],
  });

  const { writeAsync: writeAsyncOptions } = useScaffoldContractWrite({
    contractName: "Provider",
    functionName: "assertData",
    args: [dataId as `0x${string}`, encodedAssertionDataOptions],
    onBlockConfirmation(txnReceipt) {
      console.log(txnReceipt);
    },
  });

  const { writeAsync: writeAsyncYesNo } = useScaffoldContractWrite({
    contractName: "Provider",
    functionName: "assertData",
    args: [dataId as `0x${string}`, encodedAssertionDataYesNo],
    onBlockConfirmation(txnReceipt) {
      console.log(txnReceipt);
    },
  });

  function handleSubmitOptions(data: z.infer<typeof AssertDataSchemaOptions>) {
    console.log(data);
    setFormDataOptions(data);
    openConfirmModal({ id: confirmModalIdOptions });
  }

  function handleSubmitYesNo(data: z.infer<typeof AssertDataSchemaYesNo>) {
    console.log(data);
    setFormDataYesNo(data);
    openConfirmModal({ id: confirmModalIdYesNo });
  }
  const providerDatamappingOptions = [[NonnegativeNumberSchemaArray, NonNegativeBigIntFieldArray]] as const; // 👈 `as const` is necessary
  const MyFormOptions = createTsForm(providerDatamappingOptions as FormComponentMapping, {
    FormComponent: FormContainer,
  });

  const providerDatamappingYesNo = [
    [z.enum([dataIdOptions[0].name, ...dataIdOptions.map(x => x.name).slice(1)]), Select],
  ] as const; // 👈 `as const` is necessary
  const MyFormYesNo = createTsForm(providerDatamappingYesNo as FormComponentMapping, { FormComponent: FormContainer });

  const AssertDataSchemaOptions = z.object({
    points: NonnegativeNumberSchemaArray.describe("Points // 10"),
  });
  const AssertDataSchemaYesNo = z.object({
    option: z
      .enum([dataIdOptions[0].name, ...dataIdOptions.map(x => x.name).slice(1)])
      .describe("Select Resolution Option"),
  });
  return dataId ? (
    <>
      {isYesNoTemplate ? (
        <MyFormYesNo
          schema={AssertDataSchemaYesNo}
          onSubmit={handleSubmitYesNo}
          defaultValues={{
            option: dataIdOptions[0].name,
          }}
        ></MyFormYesNo>
      ) : (
        <MyFormOptions
          schema={AssertDataSchemaOptions}
          onSubmit={handleSubmitOptions}
          props={{
            // @ts-ignore
            points: {
              options: dataIdOptions,
            },
          }}
        ></MyFormOptions>
      )}
      <ConfirmModal
        id={confirmModalIdOptions}
        onConfirm={() => {
          writeAsyncOptions();
          closeConfirmModal({ id: confirmModalIdOptions });
        }}
      />
      <ConfirmModal
        id={confirmModalIdYesNo}
        onConfirm={() => {
          writeAsyncYesNo();
          closeConfirmModal({ id: confirmModalIdYesNo });
        }}
      />
    </>
  ) : (
    <>
      <div className="h-screen flex items-center justify-center">Invalid Data Id</div>
    </>
  );
};

export default AssertData;
