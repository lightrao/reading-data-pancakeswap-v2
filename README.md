# Reading Data from PancakeSwap V2

## Initialising Pancake Project

```sh
cd reading-data-pancakeswap-v2
npm init -y
npm install
mkdir client
cd client
touch GetPrices.js
```

## Installing Ethers JS

```sh
npm install ethers@5.6.4
```

## Getting Contract Addresses

Create `AddressList.js` in `./client/`

- View address and ABI of Factory: [PancakeSwap Factory V2](https://docs.pancakeswap.finance/developers/smart-contracts/pancakeswap-exchange/v2-contracts/factory-v2)
- View address and ABI of Router: [PancakeSwap Router V2](https://docs.pancakeswap.finance/developers/smart-contracts/pancakeswap-exchange/v2-contracts/router-v2)
- View BUSD address and ABI: [BUSD Token on BscScan](https://bscscan.com/token/0xe9e7cea3dedca5984780bafc599bd69add087d56)
- View WBNB address and ABI: [WBNB Token on BscScan](https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c)
- View UniswapV2Pair ABI: [Uniswap V2 Pair ABI](https://docs.uniswap.org/contracts/v2/reference/smart-contracts/pair)

## Setting Up ABI Variables

Create `AbiList.js` in `./client/`

- Find source code from BscScan by contract address
- Get ABI from the source code or documentation of PancakeSwap

## Connecting to Our First Smart Contract

Edit `GetPrices.js`

- BSC JSON-RPC Endpoint: [BSC RPC](https://docs.bnbchain.org/bnb-smart-chain/developers/rpc/)

Run:

```sh
node client/GetPrices.js
```

## Reading Price Information From PancakeSwap

- Use `getAmountsOut` function
