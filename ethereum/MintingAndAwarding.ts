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
  return contract.methods
    .AwardUser(address, message, -1)
    .send({from: accounts[0]})
    .once("reciept", (res: any) => {
      return res;
    });
};

export const Awarduser = async (
  message: string,
  address: string,
  contract: any,
  accounts
): Promise<any> => {
  console.log("ok trying aawardung");
  console.log(contract.methods);
  return contract.methods
    .balanceOf(address)
    .call()
    .then((res: number) => {
      tokenCount = res;
      for (let i = 0; i < tokenCount; i++) {
        contract.methods
          .tokenOfOwnerByIndex(address, i)
          .call()
          .then((res) => {
            console.log(
              "stage 3 is here " +
                i +
                " " +
                address +
                " " +
                message +
                " " +
                res +
                accounts[0]
            );
            contract.methods
              .AwardUser(address, message, res)
              .send({from: accounts[0]})
              .then((reciept) => {
                console.log("am i at stage two?");

                console.log(reciept);
                return true;
              });
          });
      }
    });
};

export const FindText = async (
  message: string,
  contract: any
): Promise<any> => {
  const status = await contract.methods.checkText(message).call();
  console.log(status);
  if (status) {
    return true;
  } else return false;
};
