import { memo, useState } from "react";
import { useRouter } from "next/router";
import ConfirmModal, { closeConfirmModal, openConfirmModal } from "../ConfirmModal";
import CustomCenter from "../CustomCommons";
import {
  Checkbox,
  DateTimeField,
  FormContainer,
  NonNegativeBigIntField,
  NumberField,
  Select,
  TextAreaField,
  TextField,
} from "../CustomForm";
import lighthouse from "@lighthouse-web3/sdk";
import { createTsForm } from "@ts-react/form";
import dayjs from "dayjs";
import { useAccount } from "wagmi";
import { z } from "zod";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import {
  BigIntSchema,
  DateSchema,
  FeeSchema,
  NonnegativeNumberSchema,
  PROVIDER_TEMPLATES,
  TextAreaSchema,
  TextSchema,
} from "~~/utils/common/ProviderTemplate";
import { getBytes32FromIpfsHash } from "~~/utils/ipfs";

const confirmModalId = "add-provider-id";

const getMyForm = (
  supportedCurrencies: readonly {
    _symbol: string;
    _address: string;
    _uint: bigint;
  }[],
) => {
  const providerDatamapping = [
    [z.string(), TextField],
    [DateSchema, DateTimeField],
    [TextSchema, TextField],
    [BigIntSchema, TextField],
    [FeeSchema, NonNegativeBigIntField],
    [NonnegativeNumberSchema, TextField],
    [TextAreaSchema, TextAreaField],
    [z.boolean(), Checkbox],
    [z.number(), NumberField],
    [
      z.enum([supportedCurrencies[0]._symbol, ...supportedCurrencies.slice(1).map((c: { _symbol: any }) => c._symbol)]),
      Select,
    ],
    [z.enum([PROVIDER_TEMPLATES[0], ...PROVIDER_TEMPLATES.slice(1)]), Select],
    [z.enum(["100", "1000", "10000"]), Select],
  ] as const; // 👈 `as const` is necessary

  return createTsForm(providerDatamapping, { FormComponent: FormContainer });
};

const AddProviderForm = memo(
  ({
    supportedCurrencies,
  }: // encodedTemplateData,
  {
    supportedCurrencies: readonly {
      _symbol: string;
      _address: string;
      _uint: bigint;
    }[];
    // encodedTemplateData: `0x${string}`;
  }) => {
    const router = useRouter();
    const notNullCurrencies = supportedCurrencies.filter(c => c._uint > 0n);
    const nullCurrencies = supportedCurrencies.filter(c => c._uint === BigInt(0));
    const currencyToUse = notNullCurrencies.length > 0 ? notNullCurrencies : nullCurrencies;
    const { address } = useAccount();
    const [file, setFile] = useState("");
    const [cid, setCid] = useState("");
    const [uploading, setUploading] = useState(false);
    const [formData, setFormData] = useState<z.infer<typeof AddProviderSchema>>(); // 👈 `as const` is necessary
    const [lighthouseData, setlighthouseData] = useState("");
    const AddProviderSchema = z
      .object({
        endTimeStr: DateSchema.describe("Data Assertion Deadline"),
        name: TextSchema.describe("Event Name // Who will win Ind vs Pak, CWC 2023"),
        description: TextAreaSchema.describe(
          "Description // India plays Pakistan, in the 12th match of ICC Cricket World Cup 2023 on 14th October at 14:00, 2023 at Narendra Modi Stadium, Ahmedabad.",
        ),
        source: TextSchema.describe("Data Source // Common Knowledge or www.cricbuzz.com"),
        fee: FeeSchema.describe("Fee ( fee / decimals ) // 2.25"),
        decimals: z.enum(["100", "1000", "10000"]).describe("Decimals"),
        bond: NonnegativeNumberSchema.describe("Bond Value // 500"),
        // TODO: Use react-multi-select-component with options in props
        currency: z
          .enum([currencyToUse[0]._symbol, ...currencyToUse.slice(1).map((c: { _symbol: any }) => c._symbol)])
          .describe("Currency"),
        assertionLiveness: NonnegativeNumberSchema.describe("Assertion Liveness (hours) // 24"),
        template: z.enum([PROVIDER_TEMPLATES[0], ...PROVIDER_TEMPLATES.slice(1)]).describe("Template Name"),
      })
      .refine(values => BigInt(values.fee as bigint) <= BigInt(values.decimals as string), {
        message: "Invalid Fee",
        path: ["fee"],
      });
    const { writeAsync } = useScaffoldContractWrite({
      contractName: "Provider",
      functionName: "addProvider",
      // @ts-ignore
      args: [
        formData?.name ?? "",
        `${formData?.description ?? ""}, Source: ${formData?.source ?? ""}`,
        cid,
        lighthouseData as `0x${string}`,
        {
          fee: formData?.fee ?? 0n,
          decimals: BigInt(formData?.decimals ?? 100n),
        },
        dayjs(formData?.endTimeStr ?? dayjs().add(1, "day").toISOString())?.unix() as unknown as bigint,
        (formData?.bond ?? 0n) as unknown as bigint,
        currencyToUse?.find((c: { _symbol: any }) => c._symbol == formData?.currency)?._address,
        address,
        ((formData?.assertionLiveness ?? 0) * 3600) as unknown as bigint,
        formData?.template,
        // TODO: Update when enabling other templates
        "0x",
      ],
      onBlockConfirmation: (txnReceipt: { blockHash: any }) => {
        console.log("📦 Transaction blockHash", txnReceipt.blockHash);
        router.back();
      },
    });
    async function handleSubmit(data: z.infer<typeof AddProviderSchema>) {
      console.log(data);
      setFormData(data);
      const apiKey = "1c185121.b9c306277260425cad8b629b1fd32e3c";
      const lData = {
        name: data.name,
        description: data.description,
        source: data.source,
        bond: data.bond,
        assertionLiveness: data.assertionLiveness,
        template: data.template,
      };
      const uploadResponse = await lighthouse.uploadText(JSON.stringify(lData), apiKey);
      setlighthouseData(getBytes32FromIpfsHash(uploadResponse.data["Hash"]).toString());
      console.log(getBytes32FromIpfsHash(uploadResponse.data["Hash"]).toString());
      openConfirmModal({ id: confirmModalId });
    }
    if (address === undefined) {
      return <CustomCenter>Please Connect Wallet</CustomCenter>;
    }
    const MyProviderForm = getMyForm(currencyToUse);

    // @ts-expect-error
    const uploadFile = async fileToUpload => {
      try {
        setUploading(true);
        const formData = new FormData();
        formData.append("file", fileToUpload, fileToUpload.name);
        const res = await fetch("/api/files", {
          method: "POST",
          body: formData,
        });
        const ipfsHash = await res.text();
        setCid(ipfsHash);
        setUploading(false);
        console.log(file);
      } catch (e) {
        console.log(e);
        setUploading(false);
        alert("Trouble uploading file");
      }
    };

    // @ts-expect-error
    const handleChange = e => {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
      uploadFile(e.target.files[0]);
    };

    return (
      <>
        <MyProviderForm
          schema={AddProviderSchema}
          onSubmit={handleSubmit}
          defaultValues={{
            currency: currencyToUse[0]._symbol,
            template: PROVIDER_TEMPLATES[0],
            assertionLiveness: 24,
            decimals: "100",
            endTimeStr: dayjs().add(1, "day").toISOString(),
          }}
        >
          {({
            endTimeStr,
            assertionLiveness,
            decimals,
            name,
            description,
            source,
            bond,
            currency,
            fee,
            template,
            ...rest
          }) => {
            return (
              <>
                {true ? null : template}
                {/* <CustomDateTimePicker
            label="Data Assertion Deadline"
            value={endTime}
            onChange={newValue => {
              setEndTime(newValue);
            }}
          /> */}{" "}
                {cid ? (
                  <div className="avatar flex items-center justify-center ">
                    <div className="w-32 rounded">
                      <img
                        src={`https://amethyst-fancy-wolf-915.mypinata.cloud/ipfs/${cid}?pinataGatewayToken=2gf5MglpDj-DPCuNarfOduhFnMCUuolJrtO6Xmj3_f7AfeyS0uMGrXFdJein78xx`}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      <span className="label-text">Event Image</span>
                    </label>
                    <input
                      disabled={uploading}
                      onChange={handleChange}
                      type="file"
                      className="file-input file-input-bordered w-full max-w-xs"
                    />
                  </div>
                )}
                {name}
                {endTimeStr}
                {description}
                {source}
                <div className="join">
                  {fee}
                  {decimals}
                </div>
                <div className="join">
                  {bond}
                  {currency}
                </div>
                {Object.values(rest)}
                {assertionLiveness}
              </>
            );
          }}
        </MyProviderForm>
        <ConfirmModal
          id={confirmModalId}
          onConfirm={() => {
            writeAsync();
            closeConfirmModal({ id: confirmModalId });
          }}
        />
      </>
    );
  },
);

AddProviderForm.displayName = "Add-Provider-Form";

export default AddProviderForm;
