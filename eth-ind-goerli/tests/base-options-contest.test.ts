import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { BetPlacedEvent } from "../generated/schema"
import { BetPlacedEvent as BetPlacedEventEvent } from "../generated/BaseOptionsContest/BaseOptionsContest"
import { handleBetPlacedEvent } from "../src/base-options-contest"
import { createBetPlacedEventEvent } from "./base-options-contest-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let userAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let contestAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newBetPlacedEventEvent = createBetPlacedEventEvent(
      userAddress,
      contestAddress
    )
    handleBetPlacedEvent(newBetPlacedEventEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BetPlacedEvent created and stored", () => {
    assert.entityCount("BetPlacedEvent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BetPlacedEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "userAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BetPlacedEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "contestAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
