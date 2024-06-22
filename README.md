# reading-data-pancakeswap-v2

## Initialising Pancake Project

cd reading-data-pancakeswap-v2
npm init -y
npm install
mkdir client
cd client
touch GetPrices.js

## Installing Ethers JS

npm install ethers@5.6.4

## Getting Contract Addresses

create AddressList.js in ./client/
view address and ABI of Factory: https://docs.pancakeswap.finance/developers/smart-contracts/pancakeswap-exchange/v2-contracts/factory-v2
view address and ABI of Router: https://docs.pancakeswap.finance/developers/smart-contracts/pancakeswap-exchange/v2-contracts/router-v2
view BUSD address and ABI: https://bscscan.com/token/0xe9e7cea3dedca5984780bafc599bd69add087d56
view WBNB address and ABI: https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
view UniswapV2Pair ABI: https://docs.uniswap.org/contracts/v2/reference/smart-contracts/pair

## Setting Up ABI Variables

create AbiList.js in ./client/
find source code from bscscan by contract address
we can get ABI from source code or doc of pancakeswap

## Connecting to Our First Smart Contract

edit GetPrices.js
BSC JSON-RPC Endpoint: https://docs.bnbchain.org/bnb-smart-chain/developers/rpc/
run: $ node client/GetPrices.js
