import { useCallback, useEffect, useState } from "react";
import { JsonViewer, applyValue } from "@textea/json-viewer";
import { AbiParameter } from "abitype";
import {
  //  AddressInput,
  //   Bytes32Input,
  //   BytesInput,
  CommonInputProps, //   InputBase,
  //   IntegerInput,
  //   IntegerVariant,
} from "~~/components/scaffold-eth";

const getInitialTupleState = (abiParameters: AbiParameter[]) => {
  const initialForm: Record<string, any> = {};
  if (abiParameters.length == 0) return initialForm;
  abiParameters.forEach(param => {
    const key = `${param.name}`;
    initialForm[key] = "";
  });
  return initialForm;
};

export const TupleInput = (props: { input: CommonInputProps; components: AbiParameter[] }) => {
  // input: CommonInputProps, components: AbiParameter[]
  const { placeholder } = props.input;
  //   const [form, setForm] = useState<Record<string, any>>(() => getInitialTupleState(props.components));
  const [src, setSrc] = useState(() => getInitialTupleState(props.components));
  useEffect(() => {
    // props.input.onChange(JSON.stringify(form));
    props.input.onChange(JSON.stringify(src));
  }, [src]);

  const handleChange = useCallback((path: any, oldValue: any, newValue: any) => {
    setSrc(src => applyValue(src, path, newValue));
  }, []);

  return (
    <div>
      <p>{placeholder}</p>

      <JsonViewer
        value={src}
        rootName={false}
        defaultInspectDepth={2}
        groupArraysAfterLength={2}
        editable={true}
        displayDataTypes={false}
        enableClipboard={false}
        highlightUpdates={true}
        onChange={handleChange}
        // valueTypes={[imageType]}
      />
      <br />
    </div>
  );

  //   if (props.components) {
  //     return props.components.map((paramType, i) => {
  //       const inputProps = {
  //         key: `${paramType.name}`,
  //         name: paramType.name,
  //         value: form[`${paramType.name}`],
  //         placeholder: paramType.name ? `${paramType.type} ${paramType.name}` : paramType.type,
  //         onChange: (val: any) => {
  //           setForm(form => ({ ...form, [`${paramType.name}`]: val }));
  //         },
  //       };
  //       if (paramType.type === "address") {
  //         return <AddressInput {...inputProps} />;
  //       } else if (paramType.type === "bytes32") {
  //         return <Bytes32Input {...inputProps} />;
  //       } else if (paramType.type === "bytes") {
  //         return <BytesInput {...inputProps} />;
  //       } else if (paramType.type === "string") {
  //         return <InputBase {...inputProps} />;
  //       } else if (paramType.type.includes("int") && !paramType.type.includes("[")) {
  //         return <IntegerInput {...inputProps} variant={paramType.type as IntegerVariant} />;
  //       }
  //       return <InputBase {...inputProps} />;
  //     });
  //   }

  return <div></div>;
};
