import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import { DataAsserted } from "../generated/schema"
import { DataAsserted as DataAssertedEvent } from "../generated/Provider/Provider"
import { handleDataAsserted } from "../src/provider"
import { createDataAssertedEvent } from "./provider-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let dataId = Bytes.fromI32(1234567890)
    let data = Bytes.fromI32(1234567890)
    let asserter = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let assertionId = Bytes.fromI32(1234567890)
    let newDataAssertedEvent = createDataAssertedEvent(
      dataId,
      data,
      asserter,
      assertionId
    )
    handleDataAsserted(newDataAssertedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DataAsserted created and stored", () => {
    assert.entityCount("DataAsserted", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DataAsserted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "dataId",
      "1234567890"
    )
    assert.fieldEquals(
      "DataAsserted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "data",
      "1234567890"
    )
    assert.fieldEquals(
      "DataAsserted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "asserter",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DataAsserted",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assertionId",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
