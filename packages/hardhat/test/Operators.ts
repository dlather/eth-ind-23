import { expect } from "chai";
import { ethers } from "hardhat";
import { Operators } from "../typechain-types";

describe("Operators", function () {
  // We define a fixture to reuse the same setup in every test.

  let operators: Operators;
  before(async () => {
    const operatorsFactory = await ethers.getContractFactory("Operators");
    operators = (await operatorsFactory.deploy()) as Operators;
    await operators.deployed();
  });

  describe("Functions", function () {
    it("Zero initial fee, then set fee and verify", async function () {
      const [owner] = await ethers.getSigners();
      const contestId1 = "0x0000000000000000000000000000000000000000000000000000000000000001";
      // Initial fee should be zero
      const zeroFee = await operators.getOperatorFee(owner.address, contestId1);
      expect(zeroFee.fee.toBigInt()).to.equal(BigInt(0));
      expect(zeroFee.decimals.toBigInt()).to.equal(BigInt(0));

      // Setting fee
      const fee1 = { fee: BigInt(10), decimals: BigInt(100) };
      await operators.setOperatorFee(contestId1, fee1);
      const configuredFee1 = await operators.getOperatorFee(owner.address, contestId1);
      expect(configuredFee1.fee.toBigInt()).to.equal(fee1.fee);
      expect(configuredFee1.decimals.toBigInt()).to.equal(fee1.decimals);
      expect((await operators.getAllContests(owner.address)).at(0)).to.equal(contestId1);
    });
  });
});
