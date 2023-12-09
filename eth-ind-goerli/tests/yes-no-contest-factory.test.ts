import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address } from "@graphprotocol/graph-ts"
import { ContestAdded } from "../generated/schema"
import { ContestAdded as ContestAddedEvent } from "../generated/YesNoContestFactory/YesNoContestFactory"
import { handleContestAdded } from "../src/yes-no-contest-factory"
import { createContestAddedEvent } from "./yes-no-contest-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let dataId = Bytes.fromI32(1234567890)
    let contestAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let contestId = Bytes.fromI32(1234567890)
    let newContestAddedEvent = createContestAddedEvent(
      dataId,
      contestAddress,
      contestId
    )
    handleContestAdded(newContestAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ContestAdded created and stored", () => {
    assert.entityCount("ContestAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ContestAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "dataId",
      "1234567890"
    )
    assert.fieldEquals(
      "ContestAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "contestAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ContestAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "contestId",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
