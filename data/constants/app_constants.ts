export const ACTIVE_CHAIN = "base-sepolia-testnet";
export const THIRDWEB_CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "thirdweb-client-id";
export const CONSENSUS_LIMIT = .66;
export const RANKING_SCHEMES = {
  'numeric-descending': { label: '1 (best) - 6 (worst)', startingRank: 1 },
  'numeric-ascending': { label: '6 (best) - 1 (worst)', startingRank: 6 },
  };
