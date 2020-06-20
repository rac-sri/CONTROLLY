import callSendAPI from "./callSendApi";
import resolver from "../Functionalities/resolveMessage";
import {checkAccount, mint, Awarduser} from "../ethereum/MintingAndAwarding";
import loadBlockchainData from "../ethereum/web3";

const obj = {};

async function handleMessage(
  sender_psid: string,
  received_message: any
): Promise<any> {
  const {contract, totalSupply, accounts} = await loadBlockchainData();

  let response: any;

  if (received_message.text) {
    const resolved: Boolean = await resolver(received_message.text);

    let value = obj[sender_psid];

    if (!resolved && value == undefined) {
      response = {text: `Sorry doesn't seems to be a problemtic text.`};
      callSendAPI(sender_psid, response);
      return;
    }

    if (value) {
      const message: string = received_message.text.trim();
      const match = message.match(/address/) && message.startsWith("address");
      if (match) {
        const address = message.substr(7).trim();
        const accountAvailaible = await checkAccount(address, contract);

        if (!accountAvailaible) {
          response = {
            text: `Hurray!!!. You just got awarded with a "CON" coin.\n"0x892da0bAec9263D47B46F550bAf5EC54cBF757ad" is the address of the contract that you can use to view your token in your wallet.`,
          };
          await mint(obj[sender_psid].text, address, contract, accounts);
          callSendAPI(sender_psid, response);
        } else {
          response = {
            text: `Hurray!!!. Your CON token just leveled up. Congratulation!!!!.\n. "0x892da0bAec9263D47B46F550bAf5EC54cBF757ad" is the address of the contract that you can use to view your token in your wallet.`,
          };
          await Awarduser(response, address, contract, accounts);
          callSendAPI(sender_psid, response);
        }
      }
    } else {
      response = {
        text: `That's Interesting 🤯 . You are eligible for a NFT token, Congratulations!!. Please send me your public wallet address to claim your award.\naddress <Your_Public_Key>`,
      };
      obj[sender_psid] = {text: received_message.text};
    }
  }

  // Send the response message
  callSendAPI(sender_psid, response);
}

export default handleMessage;
