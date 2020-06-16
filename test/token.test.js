const {assert} = require("chai");
const {add} = require("lodash");

const token = artifacts.require("./Awarding.sol");

require("chai").use(require("chai-as-promised")).should();

contract("Awarding", (accounts) => {
  let contract;
  before(async () => {
    contract = await token.deployed();
  });

  describe("deployment", async () => {
    it("deploys the contract", async () => {
      const address = contract.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("has a name", async () => {
      const name = await contract.name();
      assert.equal(name, "Con");
    });

    it("has as symbol", async () => {
      const symbol = await contract.symbol();
      assert.equal(symbol, "CON");
    });
  });

  describe("Minting", async () => {
    it("creates a new token", async () => {
      const owner = await contract.tokenOwner();
      assert.equal("0x8E9733bAfeFaCE904DBa87eaD485469a67B1914F", owner);
      const result = await contract.AwardUser(
        "0x96b0103df6cb146718f353ce9c037dbd57fdcbbe",
        "testing",
        -1
      );
      const totalSupply = await contract.totalSupply();
      assert.equal(totalSupply, 1);
      const event = result.logs[0].args;
    });
  });
});
