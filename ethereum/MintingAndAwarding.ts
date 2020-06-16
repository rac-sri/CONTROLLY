import {contract, accounts, web3} from "./web3";
import {add} from "winston";

let tokenCount: number;

export const mint = (message: string, address: string) => {
  contract.methods
    .AwardUser(address, message, -1)
    .send({from: accounts[0]})
    .once("reciept", (res: any) => {
      return res;
    });
};

export const Awarduser = (message: string, address: string) => {
  contract.method
    .balanceOf(address)
    .call()
    .then((res: number) => {
      tokenCount = res;
      for (let i = 0; i < tokenCount; i++) {
        contract.methods
          .tokenOfOwnerByIndex(address, i)
          .call()
          .then((res) => {
            contract.methods
              .AwardUser(address, message, res)
              .send({from: accounts[0]})
              .then((reciept) => {
                console.log(reciept);
              });
          });
      }
    });
};
