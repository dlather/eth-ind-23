import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import { ContestAdded } from "../generated/YesNoContestFactory/YesNoContestFactory"

export function createContestAddedEvent(
  dataId: Bytes,
  contestAddress: Address,
  contestId: Bytes
): ContestAdded {
  let contestAddedEvent = changetype<ContestAdded>(newMockEvent())

  contestAddedEvent.parameters = new Array()

  contestAddedEvent.parameters.push(
    new ethereum.EventParam("dataId", ethereum.Value.fromFixedBytes(dataId))
  )
  contestAddedEvent.parameters.push(
    new ethereum.EventParam(
      "contestAddress",
      ethereum.Value.fromAddress(contestAddress)
    )
  )
  contestAddedEvent.parameters.push(
    new ethereum.EventParam(
      "contestId",
      ethereum.Value.fromFixedBytes(contestId)
    )
  )

  return contestAddedEvent
}
