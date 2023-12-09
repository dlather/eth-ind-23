import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DataAsserted,
  DataAssertionResolved,
  OwnershipTransferStarted,
  OwnershipTransferred,
  ProviderAdded
} from "../generated/Provider/Provider"

export function createDataAssertedEvent(
  dataId: Bytes,
  data: Bytes,
  asserter: Address,
  assertionId: Bytes
): DataAsserted {
  let dataAssertedEvent = changetype<DataAsserted>(newMockEvent())

  dataAssertedEvent.parameters = new Array()

  dataAssertedEvent.parameters.push(
    new ethereum.EventParam("dataId", ethereum.Value.fromFixedBytes(dataId))
  )
  dataAssertedEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )
  dataAssertedEvent.parameters.push(
    new ethereum.EventParam("asserter", ethereum.Value.fromAddress(asserter))
  )
  dataAssertedEvent.parameters.push(
    new ethereum.EventParam(
      "assertionId",
      ethereum.Value.fromFixedBytes(assertionId)
    )
  )

  return dataAssertedEvent
}

export function createDataAssertionResolvedEvent(
  dataId: Bytes,
  data: Bytes,
  asserter: Address,
  assertionId: Bytes
): DataAssertionResolved {
  let dataAssertionResolvedEvent = changetype<DataAssertionResolved>(
    newMockEvent()
  )

  dataAssertionResolvedEvent.parameters = new Array()

  dataAssertionResolvedEvent.parameters.push(
    new ethereum.EventParam("dataId", ethereum.Value.fromFixedBytes(dataId))
  )
  dataAssertionResolvedEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )
  dataAssertionResolvedEvent.parameters.push(
    new ethereum.EventParam("asserter", ethereum.Value.fromAddress(asserter))
  )
  dataAssertionResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "assertionId",
      ethereum.Value.fromFixedBytes(assertionId)
    )
  )

  return dataAssertionResolvedEvent
}

export function createOwnershipTransferStartedEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferStarted {
  let ownershipTransferStartedEvent = changetype<OwnershipTransferStarted>(
    newMockEvent()
  )

  ownershipTransferStartedEvent.parameters = new Array()

  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferStartedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProviderAddedEvent(
  dataId: Bytes,
  name: string,
  dataJsonHash: Bytes,
  description: string,
  fee: ethereum.Tuple,
  endTimeStamp: BigInt,
  bond: BigInt,
  currency: Address,
  providerAddress: Address,
  assertionLiveness: BigInt
): ProviderAdded {
  let providerAddedEvent = changetype<ProviderAdded>(newMockEvent())

  providerAddedEvent.parameters = new Array()

  providerAddedEvent.parameters.push(
    new ethereum.EventParam("dataId", ethereum.Value.fromFixedBytes(dataId))
  )
  providerAddedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  providerAddedEvent.parameters.push(
    new ethereum.EventParam(
      "dataJsonHash",
      ethereum.Value.fromFixedBytes(dataJsonHash)
    )
  )
  providerAddedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  providerAddedEvent.parameters.push(
    new ethereum.EventParam("fee", ethereum.Value.fromTuple(fee))
  )
  providerAddedEvent.parameters.push(
    new ethereum.EventParam(
      "endTimeStamp",
      ethereum.Value.fromUnsignedBigInt(endTimeStamp)
    )
  )
  providerAddedEvent.parameters.push(
    new ethereum.EventParam("bond", ethereum.Value.fromUnsignedBigInt(bond))
  )
  providerAddedEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  providerAddedEvent.parameters.push(
    new ethereum.EventParam(
      "providerAddress",
      ethereum.Value.fromAddress(providerAddress)
    )
  )
  providerAddedEvent.parameters.push(
    new ethereum.EventParam(
      "assertionLiveness",
      ethereum.Value.fromUnsignedBigInt(assertionLiveness)
    )
  )

  return providerAddedEvent
}
