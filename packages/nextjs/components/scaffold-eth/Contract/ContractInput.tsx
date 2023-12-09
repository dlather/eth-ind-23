import { Dispatch, SetStateAction } from "react";
import { AbiParameter } from "abitype";
import {
  AddressInput,
  Bytes32Input,
  BytesInput,
  InputBase,
  IntegerInput,
  IntegerVariant,
  TupleInput,
} from "~~/components/scaffold-eth";

type ContractInputProps = {
  setForm: Dispatch<SetStateAction<Record<string, any>>>;
  form: Record<string, any> | undefined;
  stateObjectKey: string;
  paramType: AbiParameter;
};

function getTupleComponents(paramType: AbiParameter): readonly AbiParameter[] | undefined {
  if (
    (paramType as { type: string }).type === "tuple" ||
    ((paramType as { type: string }).type as string).startsWith("tuple[")
  ) {
    return (paramType as { components: readonly AbiParameter[] }).components;
  }
  return undefined;
}

/**
 * Generic Input component to handle input's based on their function param type
 */
export const ContractInput = ({ setForm, form, stateObjectKey, paramType }: ContractInputProps) => {
  const inputProps = {
    name: stateObjectKey,
    value: form?.[stateObjectKey],
    placeholder: paramType.name ? `${paramType.type} ${paramType.name}` : paramType.type,
    onChange: (value: any) => {
      setForm(form => ({ ...form, [stateObjectKey]: value }));
    },
  };

  if (paramType.type === "address") {
    return <AddressInput {...inputProps} />;
  } else if (paramType.type === "bytes32") {
    return <Bytes32Input {...inputProps} />;
  } else if (paramType.type === "bytes") {
    return <BytesInput {...inputProps} />;
  } else if (paramType.type === "string") {
    return <InputBase {...inputProps} />;
  } else if (paramType.type.includes("int") && !paramType.type.includes("[")) {
    return <IntegerInput {...inputProps} variant={paramType.type as IntegerVariant} />;
  } else if (paramType.type == "tuple") {
    return <TupleInput input={inputProps} components={getTupleComponents(paramType) as AbiParameter[]} />;
  }

  return <InputBase {...inputProps} />;
};
