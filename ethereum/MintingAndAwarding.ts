import {contract, accounts, web3} from "./web3";

let tokenCount: number;

export const mint = (message: string) => {
  contract.methods
    .mint(message)
    .send({from: accounts[0]})
    .once("reciept", (res: any) => {
      console.log(res);
    });
};

export const Awarduser = (message: string) => {
  contract.method
    .balanceOf(web3.eth.defaultAccount)
    .call()
    .then((res: number) => {
      tokenCount = res;
      for (let i = 0; i < tokenCount; i++) {
        contract.methods
          .tokenOfOwnerByIndex(web3.eth.defaultAccount, i)
          .call()
          .then((res) => {
            contract.methods
              .AwardUser(web3.eth.defaultAccount, message, res)
              .send({from: web3.eth.defaultAccount})
              .then((reciept) => {
                console.log(reciept);
              });
          });
      }
    });
};
