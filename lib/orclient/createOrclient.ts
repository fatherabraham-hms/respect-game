'use client'
import { ConnectedWallet } from "@privy-io/react-auth";

// For seeing orclient debug logs in console
console.debug = console.log;

// Configuration for OP Sepolia 1 deployment
// Copied from console output in https://test2-console.frapps.xyz/
const sepoliaConfig = {
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



const mainConfig = {
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

// Configurations for other deployments:
// For Optimism Fractal deployment: https://of-console.frapps.xyz/
// For ORDAO office hours config: https://ordao-console.frapps.xyz/
// Look for console output that starts with "Parsing config: "

// export async function createOrclient(wallet: ConnectedWallet): Promise<ORClient> {
//   const ornode: RemoteOrnode = new RemoteOrnode(config.ornodeUrl);
//
//   await wallet.switchChain(config.chainInfo.chainId as `0x${string}`);
//
//   const provider = await wallet.getEthereumProvider();
//   const bp = new BrowserProvider(provider);
//   const signer = await bp.getSigner();
//
//   const ctxCfg: ORContext.ConfigWithOrnode = {
//     orec: config.contracts.orec,
//     newRespect: config.contracts.newRespect,
//     ornode,
//     contractRunner: signer
//   }
//   const ctx = await ORContext.ORContext.create<ORContext.ConfigWithOrnode>(ctxCfg);
//
//   const orclient = new ORClient(ctx);
//
//   // If you want to be able to use through console
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   (window as any).c = orclient;
//
//   return orclient;
// }

