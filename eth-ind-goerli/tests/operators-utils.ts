import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import { OperatorAdded } from "../generated/Operators/Operators"

export function createOperatorAddedEvent(
  contestId: Bytes,
  operator: Address
): OperatorAdded {
  let operatorAddedEvent = changetype<OperatorAdded>(newMockEvent())

  operatorAddedEvent.parameters = new Array()

  operatorAddedEvent.parameters.push(
    new ethereum.EventParam(
      "contestId",
      ethereum.Value.fromFixedBytes(contestId)
    )
  )
  operatorAddedEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )

  return operatorAddedEvent
}
