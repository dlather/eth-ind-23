import {
  BetPlacedEvent as BetPlacedEventEvent,
  Initialized as InitializedEvent
} from "../generated/BaseOptionsContest/BaseOptionsContest"
import { BetPlacedEvent, Initialized } from "../generated/schema"

export function handleBetPlacedEvent(event: BetPlacedEventEvent): void {
  let entity = new BetPlacedEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userAddress = event.params.userAddress
  entity.contestAddress = event.params.contestAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
