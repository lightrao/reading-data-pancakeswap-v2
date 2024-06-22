const erc20ABI = ["function decimals() external view returns (uint8)"];

// Pancakeswap factory v2
const factoryABI = [
  // Address for tokenA and address for tokenB return address of pair contract (where one exists).
  // tokenA and tokenB order is interchangeable.
  // Returns 0x0000000000000000000000000000000000000000 as address where no pair exists.
  "function getPair(address tokenA, address tokenB) external view returns (address pair)",
];

// UniswapV2Pair
const pairABI = [
  // Returns the address of the pair token with the lower sort order.
  "function token0() external view returns (address)",
  // Returns the address of the pair token with the higher sort order.
  "function token1() external view returns (address)",
  // returns the reserves of both tokens in the pair and the timestamp of the last block when the reserves were updated.
  "function getReserves() public view returns (uint112 _reserve0, uint112 _reserve1, uint32 _blockTimestampLast)",
];

// PancakeSwap Router V2
const routerABI = [
  // Calculates the amounts of tokens received at each step of a swap path given an input amount of the initial token.
  // Parameters:
  // - amountIn: The amount of the initial token (path[0]) to swap.
  // - path: An array of token addresses representing the swap path, starting with the input token and ending with the output token.
  // Returns: An array of amounts representing the output at each stage of the swap, ending with the final output amount.
  "function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)",
];

module.exports = { erc20ABI, factoryABI, pairABI, routerABI };
