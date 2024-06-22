const ethers = require("ethers");

const {
  addressFactory,
  addressRouter,
  addressFrome,
  addressTo,
} = require("./AddressList");

const { erc20ABI, factoryABI, pairABI, routerABI } = require("./AbiList");

// Standard Provider
const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed.bnbchain.org"
);
// console.log(provider);

// Connect to Factory
const contractFactory = new ethers.Contract(
  addressFactory,
  factoryABI,
  provider
);
// console.log(contractFactory);

// Connect to Router
const contractRouter = new ethers.Contract(addressRouter, routerABI, provider);
// console.log(contractRouter);
