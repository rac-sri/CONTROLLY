import {add} from "winston";

let tokenCount: number;

export const checkAccount = async (
  address: string,
  contract: any
): Promise<any> => {
  const exist = await contract.methods.balanceOf(address).call();
  return exist === "0" ? false : true;
};

export const mint = async (
  message: string,
  address: string,
  contract: any,
  accounts
): Promise<any> => {
  contract.methods
    .AwardUser(address, message, -1)
    .send({from: accounts[0]})
    .once("reciept", (res: any) => {
      return res;
    });
};

export const Awarduser = (
  message: string,
  address: string,
  contract: any,
  accounts
) => {
  contract.methods
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
