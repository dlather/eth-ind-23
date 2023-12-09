import { memo, useState } from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import ConfirmModal, { closeConfirmModal, openConfirmModal } from "../ConfirmModal";
import { FormContainerCompact, MultiCheckbox, Select } from "../CustomForm";
import { createTsForm } from "@ts-react/form";
import { z } from "zod";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const confirmModalId = "place-bet-confirm-id";

const BetForm = memo(
  ({
    count,
    providerOptions,
    contestAddress,
    fee,
  }: {
    contestAddress: string;
    fee: bigint;
    count: number;
    providerOptions: readonly {
      id: `0x${string}`;
      symbol: string;
    }[];
  }) => {
    const operatorAddress = (useSearchParams() as ReadonlyURLSearchParams).get("operatorAddress");
    const [formDataMutiSelect, setformDataMutiSelect] = useState<z.infer<typeof MultiSelectSchema>>();
    const [formDataSingleSelect, setformDataSingleSelect] = useState<z.infer<typeof SingleSelectSchema>>();
    const optionSchema = z.object({
      key: z.string(),
      label: z.string(),
      value: z.string(),
    });
    const optionsSchema = z.array(optionSchema);
    const providerDatamapping = [
      [optionsSchema, MultiCheckbox],
      [z.enum([providerOptions[0].symbol, ...providerOptions.map(x => x.symbol).slice(1)]), Select],
    ] as const;
    const MyForm = createTsForm(providerDatamapping, { FormComponent: FormContainerCompact });
    const SingleSelectSchema = z.object({
      option: z
        .enum([providerOptions[0].symbol, ...providerOptions.map(x => x.symbol).slice(1)])
        .describe(`Select any 1 option`),
    });
    const MultiSelectSchema = z.object({
      options: optionsSchema.describe(`Select any ${count} option`),
    });
    function handleSubmitSingleSelect(data: z.infer<typeof SingleSelectSchema>) {
      console.log(data);
      setformDataSingleSelect(data);
      openConfirmModal({ id: confirmModalId });
    }
    function handleSubmitMultiSelect(data: z.infer<typeof MultiSelectSchema>) {
      console.log(data);
      setformDataMutiSelect(data);
      openConfirmModal({ id: confirmModalId });
    }
    const singleSelectString = formDataSingleSelect?.option;
    const singleSelectStringId =
      singleSelectString === undefined ? null : providerOptions.filter(p => p.symbol === singleSelectString)[0].id;
    const multiSelectStringIds = formDataMutiSelect?.options.map(x => x.key) ?? [];
    const combinedSelectedIds = [singleSelectStringId, ...multiSelectStringIds];
    const { data: encodedBet } = useScaffoldContractRead({
      contractName: "BaseOptionsContest",
      functionName: "encode",
      args: [combinedSelectedIds as `0x${string}`[]],
    });
    const { writeAsync } = useScaffoldContractWrite({
      contractName: "BaseOptionsContest",
      functionName: "placeBet",
      address: contestAddress ?? "",
      args: [operatorAddress ?? "", encodedBet],
      value: fee,
    });
    return (
      <>
        {count === 1 ? (
          <MyForm schema={SingleSelectSchema} onSubmit={handleSubmitSingleSelect}></MyForm>
        ) : (
          <MyForm
            schema={MultiSelectSchema}
            onSubmit={handleSubmitMultiSelect}
            props={{
              options: {
                options: providerOptions.map(x => ({ label: x.symbol, value: x.symbol, key: x.id })),
              },
            }}
          ></MyForm>
        )}
        <ConfirmModal
          id={confirmModalId}
          onConfirm={() => {
            writeAsync();
            setformDataMutiSelect(undefined);
            setformDataSingleSelect(undefined);
            closeConfirmModal({ id: confirmModalId });
          }}
        />
      </>
    );
  },
);

BetForm.displayName = "BetForm";

export default BetForm;
