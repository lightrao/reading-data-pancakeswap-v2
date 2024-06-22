const ethers = require("ethers");

const {
  addressFactory,
  addressRouter,
  addressFrom,
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

// Call the block chain
const getPrices = async (amountInHuman) => {
  // Convert to amount in
  const contractToken = new ethers.Contract(addressFrom, erc20ABI, provider);
  const decimals = await contractToken.decimals();
  //   console.log(decimals);
  const amountIn = ethers.utils.parseUnits(amountInHuman, decimals).toString();
  console.log(amountIn); // In Wei
};

const amountInHuman = "500";
getPrices(amountInHuman);
