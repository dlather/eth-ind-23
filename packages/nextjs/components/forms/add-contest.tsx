import { memo, useState } from "react";
import { useRouter } from "next/router";
import ConfirmModal, { closeConfirmModal, openConfirmModal } from "../ConfirmModal";
import { Checkbox, DateTimeField, FormContainer, MultiCheckbox, TextField } from "../CustomForm";
import { createTsForm } from "@ts-react/form";
import dayjs from "dayjs";
import { z } from "zod";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { DateSchema, NonnegativeNumberSchema } from "~~/utils/common/ProviderTemplate";

const confirmModalId = "add-contest-id";

const optionSchema = z.object({
  key: z.string(),
  label: z.string(),
  value: z.string(),
});

// Now add this object into an array
const optionsSchema = z.array(optionSchema);

const providerDatamapping = [
  [DateSchema, DateTimeField],
  [NonnegativeNumberSchema, TextField],
  [z.boolean(), Checkbox],
  [optionsSchema, MultiCheckbox],
] as const; // 👈 `as const` is necessary
const MyForm = createTsForm(providerDatamapping, { FormComponent: FormContainer });

const AddContestForm = memo(
  ({
    dataId,
    isYesNoTemplate,
    configuredTemplate,
    currencySymbol,
  }: {
    currencySymbol: string;
    isYesNoTemplate: boolean;
    dataId: string;
    configuredTemplate: readonly {
      id: `0x${string}`;
      name: string;
      symbol: string;
      ipfsHash: string;
    }[];
  }) => {
    // TODO: Can't read length of undefined
    const router = useRouter();
    const [formData, setFormData] = useState<z.infer<typeof AddContetSchema>>();
    const { data: encodedContestDataOptions } = useScaffoldContractRead({
      contractName: "OptionsContestFactory",
      functionName: "encode",
      args: [
        formData?.count as unknown as bigint,
        formData?.options.map(o => o.key) as `0x${string}`[],
        formData?.fee as unknown as bigint,
        formData?.spots as unknown as bigint,
        dayjs(formData?.stopTimeStr)?.unix() as unknown as bigint,
      ],
    });
    const { data: encodedContestDataYesNo } = useScaffoldContractRead({
      contractName: "YesNoContestFactory",
      functionName: "encode",
      args: [
        formData?.fee as unknown as bigint,
        formData?.spots as unknown as bigint,
        dayjs(formData?.stopTimeStr)?.unix() as unknown as bigint,
      ],
    });
    function handleSubmit(data: z.infer<typeof AddContetSchema>) {
      console.log(data);
      setFormData(data);
      openConfirmModal({ id: confirmModalId });
    }
    const { writeAsync: writeAsyncOptions } = useScaffoldContractWrite({
      contractName: "OptionsContestFactory",
      functionName: "addContest",
      args: [dataId as `0x${string}`, encodedContestDataOptions],
      onBlockConfirmation: (txnReceipt: { blockHash: any }) => {
        console.log("📦 Transaction blockHash", txnReceipt.blockHash);
      },
    });
    const { writeAsync: writeAsyncYesNo } = useScaffoldContractWrite({
      contractName: "YesNoContestFactory",
      functionName: "addContest",
      args: [dataId as `0x${string}`, encodedContestDataYesNo],
      onBlockConfirmation: (txnReceipt: { blockHash: any }) => {
        console.log("📦 Transaction blockHash", txnReceipt.blockHash);
        router.back();
      },
    });

    const AddContetSchema = z.object({
      stopTimeStr: DateSchema.describe("Data Assertion Deadline"),
      count: NonnegativeNumberSchema.describe("Count // 1"),
      fee: NonnegativeNumberSchema.describe(`Entry Fee (${currencySymbol} in Wei) // 5000`),
      spots: NonnegativeNumberSchema.describe("Spots // 2"),
      options: optionsSchema.describe("Select Valid Options"),
    });
    return (
      <>
        <MyForm
          schema={AddContetSchema}
          onSubmit={handleSubmit}
          defaultValues={{
            count: 1,
            stopTimeStr: dayjs().add(6, "hours").toISOString(),
            options: configuredTemplate.map(x => ({ label: x.name, value: x.name, key: x.id })),
          }}
          props={{
            options: {
              options: (
                configuredTemplate as unknown as {
                  id: `0x${string}`;
                  name: string;
                  symbol: string;
                  ipfsHash: string;
                }[]
              ).map(x => ({ label: x.name, value: x.name, key: x.id })),
            },
          }}
        >
          {({ stopTimeStr, count, fee, spots, options }) => {
            return (
              <>
                {stopTimeStr}
                {isYesNoTemplate === false ? count : null}
                {fee}
                {spots}
                {isYesNoTemplate === false ? options : null}
              </>
            );
          }}
        </MyForm>
        <ConfirmModal
          id={confirmModalId}
          onConfirm={() => {
            isYesNoTemplate ? writeAsyncYesNo() : writeAsyncOptions();
            closeConfirmModal({ id: confirmModalId });
          }}
        />
      </>
    );
  },
);

AddContestForm.displayName = "AddContestForm";

export default AddContestForm;
