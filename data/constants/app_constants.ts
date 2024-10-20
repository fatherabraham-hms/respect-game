export const CONSENSUS_LIMIT = .66;
export const RANKING_SCHEMES = {
  'numeric-descending': { label: '1 (best) - 6 (worst)', startingRank: 1 },
  'numeric-ascending': { label: '6 (best) - 1 (worst)', startingRank: 6 },
  };
export const SESSION_POLLING_INTERVAL = 5000;
export const VOTING_ROUND_POLLING_INTERVAL = 3000;
export const OR_CONFIG_OP_SEPOLIA = {
  "contracts": {
    "oldRespect": "0x6b11FC2cec86edeEd1F3705880deB9010F0D584B",
    "newRespect": "0xF7640995eAffAf5dB5ABEa7cE1F06Be968BFF5e5",
    "orec": "0x430f3F482831898Bc83c7Fe11948b3ADBE025B66"
  },
  "ornodeUrl": "https://test2-ornode.frapps.xyz",
  "appTitle": "ORConsole (test)",
  "chainInfo": {
    "chainId": "0xAA37DC",
    "rpcUrls": [
      "https://sepolia.optimism.io"
    ],
    "chainName": "OP Sepolia",
    "blockExplorerUrl": "https://optimism-sepolia.blockscout.com/",
    "nativeCurrency": {
      "name": "Ethereum",
      "symbol": "ETH",
      "decimals": 18
    }
  }
}



export const OR_CONFIG_OP_MAIN = {
  "contracts": {
    "oldRespect": "0x53C9E3a44B08E7ECF3E8882996A500eb06c0C5CC",
    "newRespect": "0xAA76B4397b0F79D5a16093c3040d8cf95951b9Ee",
    "orec": "0x7Abe89De9172b3F8F122AA8756b0F9Ee989686b7"
  },
  "ornodeUrl": "https://of2-ornode.frapps.xyz",
  "appTitle": "ORConsole (Optimism Fractal)",
  "chainInfo": {
    "chainId": "0xA",
    "rpcUrls": [
      "https://mainnet.optimism.io/"
    ],
    "chainName": "Optimism",
    "blockExplorerUrl": "https://optimism.blockscout.com",
    "nativeCurrency": {
      "name": "Ethereum",
      "symbol": "ETH",
      "decimals": 18
    }
  }
}
