import { ReactElement } from "react";
import { JsonViewer } from "@textea/json-viewer";
import { TransactionBase, TransactionReceipt, formatEther } from "viem";
import { Address } from "~~/components/scaffold-eth";

type DisplayContent =
  | string
  | number
  | bigint
  | Record<string, any>
  | TransactionBase
  | TransactionReceipt
  | undefined
  | unknown;

export const displayTxResult = (
  displayContent: DisplayContent | DisplayContent[],
  asText = false,
): string | ReactElement | number => {
  if (displayContent == null) {
    return "";
  }

  if (typeof displayContent === "bigint") {
    try {
      const asNumber = Number(displayContent);
      if (asNumber <= Number.MAX_SAFE_INTEGER && asNumber >= Number.MIN_SAFE_INTEGER) {
        return asNumber;
      } else {
        return "Ξ" + formatEther(displayContent);
      }
    } catch (e) {
      return "Ξ" + formatEther(displayContent);
    }
  }

  if (typeof displayContent === "string" && displayContent.indexOf("0x") === 0 && displayContent.length === 42) {
    return asText ? displayContent : <Address address={displayContent} />;
  }

  return (
    <JsonViewer
      value={displayContent}
      rootName={false}
      defaultInspectDepth={2}
      groupArraysAfterLength={2}
      displayDataTypes={false}
      // sx={{
      //   bgcolor: "background.paper",
      //   boxShadow: 1,
      //   borderRadius: 2,
      //   p: 2,
      //   minWidth: 300,
      // }}
    />
  );
};

// const displayTxResultAsText = (displayContent: DisplayContent) => displayTxResult(displayContent, true);
