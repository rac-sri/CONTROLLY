import Web3 from "web3";
import walletProvider from "@truffle/hdwallet-provider";
import Controlly from "../build/contracts/Controlly.json";

const provider = new walletProvider(
  "call glow acoustic vintage front ring trade assist shuffle mimic volume reject",
  "https://rinkeby.infura.io/v3/3dc8b2e3489c4260904f45a4e74a56dc"
);

const web3 = new Web3(provider);

let accounts: Array<String>,
  networkId: any,
  networkData: any,
  contract: any,
  totalSupply: any;

const loadBlockchainData = async () => {
  accounts = await web3.eth.getAccounts();

  //check the network we are on and extract that network instance
  networkId = await web3.eth.net.getId();
  networkData = Controlly.networks[networkId];

  //
  if (networkData) {
    const abi: any = Controlly.abi;
    const address = networkData.address;
    contract = await new web3.eth.Contract(abi, address);
    totalSupply = await contract.methods.totalSupply().call();
  }
};

loadBlockchainData();

export const mint = (message: string) => {
  contract.methods
    .mint(message)
    .send({ from: accounts[0] })
    .once("reciept", (res: any) => {
      console.log(res);
    });
};
