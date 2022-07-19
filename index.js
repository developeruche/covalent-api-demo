const axios = require("axios");
const action = require("./action");


const APIKEY = 'ckey_734f1d56d86f424cad81af0241d';
const baseURL = 'https://api.covalenthq.com/v1';
const blockchainChainId = '1';
const demoAddress = '0x383518188C0C6d7730D91b2c03a03C837814a899';

async function main() {
    // const placeData = await action.get_all_chain();
    // console.log(placeData)

    const placeData = await action.get_doa_balance(blockchainChainId, demoAddress);
    console.log(placeData)

    // const placeData = await action.get_doa_latest_trans(blockchainChainId, demoAddress);
    // console.log(placeData)
}

// Example address request
// getWalletBalance(blockchainChainId, demoAddress);

main()