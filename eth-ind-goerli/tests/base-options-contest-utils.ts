import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  BetPlacedEvent,
  Initialized
} from "../generated/BaseOptionsContest/BaseOptionsContest"

export function createBetPlacedEventEvent(
  userAddress: Address,
  contestAddress: Address
): BetPlacedEvent {
  let betPlacedEventEvent = changetype<BetPlacedEvent>(newMockEvent())

  betPlacedEventEvent.parameters = new Array()

  betPlacedEventEvent.parameters.push(
    new ethereum.EventParam(
      "userAddress",
      ethereum.Value.fromAddress(userAddress)
    )
  )
  betPlacedEventEvent.parameters.push(
    new ethereum.EventParam(
      "contestAddress",
      ethereum.Value.fromAddress(contestAddress)
    )
  )

  return betPlacedEventEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}
