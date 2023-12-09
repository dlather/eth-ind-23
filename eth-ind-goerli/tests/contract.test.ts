import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { ImplementationChanged } from "../generated/schema"
import { ImplementationChanged as ImplementationChangedEvent } from "../generated/Contract/Contract"
import { handleImplementationChanged } from "../src/contract"
import { createImplementationChangedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let key = "Example string value"
    let name = "Example string value"
    let newAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newImplementationChangedEvent = createImplementationChangedEvent(
      key,
      name,
      newAddress
    )
    handleImplementationChanged(newImplementationChangedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ImplementationChanged created and stored", () => {
    assert.entityCount("ImplementationChanged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ImplementationChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "key",
      "Example string value"
    )
    assert.fieldEquals(
      "ImplementationChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "ImplementationChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
