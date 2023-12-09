import ContestCardMatch from "./contestmatch";
import { CustomLoading } from "~~/components/CustomCommons";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const ProviderCardMatches = ({
  dataId,
  contestIds,
  isResolved,
}: {
  dataId: string;
  contestIds: string[];
  isResolved: boolean;
}) => {
  const { data: dataIdDetails, isLoading: ldataIdDetails } = useScaffoldContractRead({
    contractName: "Provider",
    functionName: "getDataIdDetails",
    args: [dataId as `0x${string}`],
  });
  const { data: configuredTemplateBytes } = useScaffoldContractRead({
    contractName: "OptionsProviderTemplate",
    functionName: "getConfiguredTemplate",
    args: [dataId as `0x${string}`],
  });
  const { data: allproviderOptions } = useScaffoldContractRead({
    contractName: "OptionsProviderTemplate",
    functionName: "decode",
    args: [configuredTemplateBytes],
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

  return ldataIdDetails ? (
    <CustomLoading />
  ) : dataIdDetails && dataIdDetails.assertionDetails.resolved == isResolved ? (
    <div key={dataIdDetails?.dataId} className="bg-white my-4 mx-2 mb-6 p-2 border rounded-lg">
      <div tabIndex={0} className="collapse collapse-arrow">
        <div className="collapse-title text-xl font-semibold">{dataIdDetails?.dataDetails.name}</div>
        <div className="collapse-content">
          <p>{dataIdDetails.dataDetails.description}</p>
        </div>
      </div>
      {contestIds.map(cId => {
        return (
          <ContestCardMatch
            key={cId}
            isResolved={isResolved}
            contestAddress={cId}
            providerOptions={
              (dataIdDetails.dataDetails.template === "YES_NO_PROVIDER_TEMPLATE"
                ? (allproviderOptionsYesNo || []).map(x => ({ id: x.id, symbol: x.name }))
                : (
                    (allproviderOptions as readonly {
                      id: `0x${string}`;
                      name: string;
                      symbol: string;
                      ipfsHash: string;
                    }[]) || []
                  ).map(x => ({ id: x.id, symbol: x.symbol }))) ?? []
            }
          />
        );
      })}
    </div>
  ) : null;
};

export default ProviderCardMatches;
