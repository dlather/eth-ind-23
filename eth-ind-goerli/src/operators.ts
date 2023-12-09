import { OperatorAdded as OperatorAddedEvent } from "../generated/Operators/Operators"
import { OperatorAdded } from "../generated/schema"

export function handleOperatorAdded(event: OperatorAddedEvent): void {
  let entity = new OperatorAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contestId = event.params.contestId
  entity.operator = event.params.operator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
