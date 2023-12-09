import { memo, useState } from "react";
import ConfirmModal, { closeConfirmModal, openConfirmModal } from "../ConfirmModal";
import { FormContainer, NonNegativeBigIntField, Select } from "../CustomForm";
import { createTsForm } from "@ts-react/form";
import { z } from "zod";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { FeeSchema } from "~~/utils/common/ProviderTemplate";

const confirmOperatorFeeId = "add-operator-fee";

const AddOperatorFeeForm = memo(({ contestId }: { contestId: `0x${string}` }) => {
  const [formDataOperatorFee, setFormDataOperatorFee] = useState<z.infer<typeof SetOperatorFeeSchema>>();
  const { writeAsync: writeOperatorFee } = useScaffoldContractWrite({
    contractName: "Operators",
    functionName: "setOperatorFee",
    args: [
      contestId as `0x${string}`,
      {
        fee: formDataOperatorFee?.fee ?? 0n,
        decimals: BigInt(formDataOperatorFee?.decimals ?? 100n),
      },
    ],
  });

  function handleSubmitOperatorFee(data: z.infer<typeof SetOperatorFeeSchema>) {
    console.log(data);
    setFormDataOperatorFee(data);
    openConfirmModal({ id: confirmOperatorFeeId });
  }
  const providerDatamapping = [
    [FeeSchema, NonNegativeBigIntField],
    [z.enum(["100", "1000", "10000"]), Select],
  ] as const; // 👈 `as const` is necessary
  const MyForm = createTsForm(providerDatamapping, {
    FormComponent: FormContainer,
  });

  const SetOperatorFeeSchema = z.object({
    fee: FeeSchema.describe("Fee ( fee / decimals ) // 2.25"),
    decimals: z.enum(["100", "1000", "10000"]).describe("Decimals"),
  });
  return (
    <div className="flex items-center justify-center">
      <MyForm
        schema={SetOperatorFeeSchema}
        onSubmit={handleSubmitOperatorFee}
        defaultValues={{
          decimals: "100",
        }}
        formProps={{
          formLabel: "Add Operator Fee",
        }}
      ></MyForm>
      <ConfirmModal
        id={confirmOperatorFeeId}
        onConfirm={() => {
          writeOperatorFee();
          closeConfirmModal({ id: confirmOperatorFeeId });
        }}
      />
    </div>
  );
});

AddOperatorFeeForm.displayName = "AddOperatorFeeForm";

export default AddOperatorFeeForm;
