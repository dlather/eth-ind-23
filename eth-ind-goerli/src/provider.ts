import {
  DataAsserted as DataAssertedEvent,
  DataAssertionResolved as DataAssertionResolvedEvent,
  OwnershipTransferStarted as OwnershipTransferStartedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProviderAdded as ProviderAddedEvent
} from "../generated/Provider/Provider"
import {
  DataAsserted,
  DataAssertionResolved,
  OwnershipTransferStarted,
  OwnershipTransferred,
  ProviderAdded
} from "../generated/schema"

export function handleDataAsserted(event: DataAssertedEvent): void {
  let entity = new DataAsserted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dataId = event.params.dataId
  entity.data = event.params.data
  entity.asserter = event.params.asserter
  entity.assertionId = event.params.assertionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDataAssertionResolved(
  event: DataAssertionResolvedEvent
): void {
  let entity = new DataAssertionResolved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dataId = event.params.dataId
  entity.data = event.params.data
  entity.asserter = event.params.asserter
  entity.assertionId = event.params.assertionId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferStarted(
  event: OwnershipTransferStartedEvent
): void {
  let entity = new OwnershipTransferStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProviderAdded(event: ProviderAddedEvent): void {
  let entity = new ProviderAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dataId = event.params.dataId
  entity.name = event.params.name
  entity.dataJsonHash = event.params.dataJsonHash
  entity.description = event.params.description
  entity.fee_fee = event.params.fee.fee
  entity.fee_decimals = event.params.fee.decimals
  entity.endTimeStamp = event.params.endTimeStamp
  entity.bond = event.params.bond
  entity.currency = event.params.currency
  entity.providerAddress = event.params.providerAddress
  entity.assertionLiveness = event.params.assertionLiveness

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
