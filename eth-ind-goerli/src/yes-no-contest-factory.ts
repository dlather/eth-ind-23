import { ContestAdded as ContestAddedEvent } from "../generated/YesNoContestFactory/YesNoContestFactory"
import { ContestAdded } from "../generated/schema"

export function handleContestAdded(event: ContestAddedEvent): void {
  let entity = new ContestAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dataId = event.params.dataId
  entity.contestAddress = event.params.contestAddress
  entity.contestId = event.params.contestId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
