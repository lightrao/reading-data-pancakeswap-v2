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
  //   console.log(amountIn); // In Wei

  // Get amounts out
  const amountsOut = await contractRouter.getAmountsOut(amountIn, [
    addressFrom, // BUSD
    addressTo, // WBNB
  ]);
  //   console.log(amountsOut);

  // Convert amount out - decimals
  const contractToken2 = new ethers.Contract(addressTo, erc20ABI, provider);
  const decimals2 = await contractToken2.decimals();
  //   console.log(decimals2);

  // Convert amount out - human readable
  const amountOutHuman = ethers.utils.formatUnits(
    amountsOut[1].toString(),
    decimals2
  );
  console.log(amountOutHuman);
};

const amountInHuman = "500";
getPrices(amountInHuman);
