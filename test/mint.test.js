require("chai").use(require("chai-as-promised")).should();

const token = artifacts.require("./Awarding.sol");
const {assert} = require("chai");

const mint = (contract, message, accounts) => {
  contract.AwardUser(accounts[1], message, -1).then("reciept", (res) => {
    return res;
  });
};

contract("Awarding", (accounts) => {
  let contract;
  before(async () => {
    contract = await token.deployed();
  });

  describe("Mint function working", async () => {
    it("deploys the contract", async () => {
      const address = contract.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });

    it("mints new token", async () => {
      const result = await mint(contract, accounts[1], "testing");
      assert.equal(result, "No result");
    });
  });
});
