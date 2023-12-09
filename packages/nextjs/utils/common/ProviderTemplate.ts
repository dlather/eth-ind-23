import { createUniqueFieldSchema } from "@ts-react/form";
import { z } from "zod";

export const OtionsWithGroupTemplateName = "OPTIONS_WITH_GROUP";
export const YesNoQueryName = "Yes / No Query";
export const PROVIDER_TEMPLATES = ["YES_NO_PROVIDER_TEMPLATE", "OPTIONS_PROVIDER_TEMPLATE"];

export type OptionsTemplate = {
  Options: {
    name: string;
    symbol: string;
    ipfsHash: string;
  }[];
};

export const YesNoSchema = createUniqueFieldSchema(z.string().min(1), "yesNo");
export const TextSchema = createUniqueFieldSchema(z.string().min(1), "textSchema");
export const DateSchema = createUniqueFieldSchema(z.string().min(1), "dateSchema");
export const TextAreaSchema = createUniqueFieldSchema(z.string().min(1), "textAreaSchema");
export const BigIntSchema = createUniqueFieldSchema(z.number(), "bigIntSchema");
export const NonnegativeNumberSchema = createUniqueFieldSchema(
  z.coerce.number().nonnegative(),
  "nonnegativeNumberSchema",
);
export const NonnegativeNumberSchemaArray = createUniqueFieldSchema(
  z
    .object({
      id: z.string(),
      points: z.coerce.number().nonnegative(),
    })
    .array(),
  "nonnegativeNumberSchemaArray",
);
export const FeeSchema = createUniqueFieldSchema(
  z.coerce
    .bigint()
    .nonnegative()
    .multipleOf(1n)
    .refine(val => val <= 10000 && val >= 0, {
      message: "Enter Valid Percentage",
    }),
  "feeSchema",
);

export interface IdNameType {
  id: string;
  name: string;
}
export interface IDPointsType {
  id: string;
  points: bigint;
}

export const ZeroBytes32 = "0x0000000000000000000000000000000000000000000000000000000000000000";

export const YES_NO_QUERY: OptionsTemplate = {
  Options: [
    {
      name: "Yes",
      symbol: "Yes",
      ipfsHash: "QmQqzMTavQgT4f4T5v6PWBp7XNKtoPmC9jvn12WPT3gkSE",
    },
    {
      name: "No",
      symbol: "No",
      ipfsHash: "QmQqzMTavQgT4f4T5v6PWBp7XNKtoPmC9jvn12WPT3gkSE",
    },
  ],
};
