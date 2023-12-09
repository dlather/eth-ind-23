import ContestCard from "./contestCard";
import { CustomLoading } from "~~/components/CustomCommons";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const ProviderCard = ({
  dataId,
  contestIds,
  currencySymbol,
}: {
  dataId: string;
  contestIds: string[];
  currencySymbol: string;
}) => {
  const { data: dataIdDetails } = useScaffoldContractRead({
    contractName: "Provider",
    functionName: "getDataIdDetails",
    args: [dataId as `0x${string}`],
  });
  const { data: configuredTemplateBytesOptions } = useScaffoldContractRead({
    contractName: "OptionsProviderTemplate",
    functionName: "getConfiguredTemplate",
    args: [dataId as `0x${string}`],
  });
  const { data: allproviderOptionsOptions } = useScaffoldContractRead({
    contractName: "OptionsProviderTemplate",
    functionName: "decode",
    args: [configuredTemplateBytesOptions],
  });
  const { data: configuredTemplateBytesYesNo } = useScaffoldContractRead({
    contractName: "YesNoProviderTemplate",
    functionName: "getConfiguredTemplate",
    args: [dataId as `0x${string}`],
  });
  const { data: allproviderOptionsYesNo } = useScaffoldContractRead({
    contractName: "YesNoProviderTemplate",
    functionName: "decode",
    args: [configuredTemplateBytesYesNo],
  });

  return dataIdDetails === undefined ||
    allproviderOptionsOptions === undefined ||
    allproviderOptionsYesNo === undefined ? (
    <CustomLoading />
  ) : dataIdDetails.assertionDetails.resolved == false &&
    parseInt(dataIdDetails.providerDetails.endTimeStamp.toString()) * 1000 > Date.now() ? (
    <div key={dataIdDetails?.dataId} className="bg-white my-4 mx-2 mb-6 p-2 border rounded-lg">
      <div tabIndex={0} className="collapse collapse-arrow">
        <div className="collapse-title text-xl font-semibold">{dataIdDetails?.dataDetails.name}</div>
        <div className="collapse-content">
          <p>{dataIdDetails.dataDetails.description}</p>
        </div>
      </div>
      {contestIds.map(cId => {
        return (
          <ContestCard
            currencySymbol={currencySymbol}
            key={cId}
            contestAddress={cId}
            isYesNoTemplate={dataIdDetails.dataDetails.template === "YES_NO_PROVIDER_TEMPLATE"}
            providerOptions={
              dataIdDetails.dataDetails.template === "YES_NO_PROVIDER_TEMPLATE"
                ? ((
                    allproviderOptionsYesNo as readonly {
                      id: `0x${string}`;
                      name: string;
                    }[]
                  ).map(
                    x =>
                      ({ id: x.id, symbol: x.name } as {
                        id: `0x${string}`;
                        symbol: string;
                      }),
                  ) as readonly {
                    id: `0x${string}`;
                    symbol: string;
                  }[])
                : ((
                    allproviderOptionsOptions as readonly {
                      id: `0x${string}`;
                      name: string;
                      symbol: string;
                      ipfsHash: string;
                    }[]
                  ).map(
                    x =>
                      ({ id: x.id, symbol: x.symbol } as {
                        id: `0x${string}`;
                        symbol: string;
                      }),
                  ) as readonly {
                    id: `0x${string}`;
                    symbol: string;
                  }[])
            }
            providerFee={
              parseInt(
                (
                  (dataIdDetails.providerDetails.fee.fee * BigInt(10000)) /
                  dataIdDetails.providerDetails.fee.decimals
                ).toString(),
              ) / 100
            }
          />
        );
      })}
    </div>
  ) : null;
};

export default ProviderCard;
