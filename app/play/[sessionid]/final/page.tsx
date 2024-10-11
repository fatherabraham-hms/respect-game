'use client';
import { getConsensusSessionWinnersAction } from '@/app/actions';
import { useEffect, useState } from 'react';
import { ConsensusWinnerModel } from '@/lib/models/consensus-winner.model';
import { Button } from '@/components/ui/button';
import { getContract, prepareContractCall, sendTransaction } from 'thirdweb';
import { optimism, sepolia } from 'thirdweb/chains';
import { client } from '@/lib/client';
import { useActiveWallet } from 'thirdweb/react';

export default function IndexPage({ params }: { params: { sessionid: string } }) {
  const wallet = useActiveWallet();
  const account = wallet?.getAccount();
  const [consensusRankings, setConsensusRankings] = useState<ConsensusWinnerModel[]>([]);

  // https://of-console.frapps.xyz/classes/ORClient.html#proposeBreakoutResult

  let contractAddress, chain;
  if (process.env.NODE_ENV === 'production') {
    contractAddress = process.env.OREC_SEPOLIA || '';
    chain = optimism;
  } else {
    contractAddress = process.env.OREC_SEPOLIA || '';
    chain = sepolia;
  }

  const contractInst = getContract({
    address: contractAddress,
    chain: chain,
    client: client
  });

  const transaction = prepareContractCall({
    contract: contractInst,
    method: "function proposeBreakoutResult()",
    params: [],
  });

  if (account) {
    sendTransaction({
      account,
      transaction,
    }).then((hash) => {
      console.log('Transaction hash:', hash);
    });
  }

let warning = (
  <div className="flex items-center justify-center h-96">
    <h1 className="font-semibold text-lg md:text-2xl">Looks like you're not a member of consensus session
      #{params?.sessionid}, sorry!</h1>
  </div>
);

useEffect(() => {
  getConsensusSessionWinnersAction(parseInt(params.sessionid)).then((winnersResp) => {
    if (winnersResp && winnersResp.length > 0) {
      const results = winnersResp as unknown as ConsensusWinnerModel[];
      setConsensusRankings(results);
    }
  });
}, []);

function pushOnChain() {
  // if (account) {
  //   const tx: SendTransactionOption = {
  //     blobVersionedHashes: [],
  //     blobs: undefined,
  //     chainId: optimismSepolia.id
  //   };
  //   account.sendTransaction(tx);
  // }
}

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Final Consensus</h1>
      </div>
      {
        consensusRankings.length > 0 ? (
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Rankings</h1>
            <div className="flex flex-col">
              {consensusRankings.map((winner) => (
                <div key={winner.walletaddress} className="flex-col">
                  <div className="m-4">
                    <h2 className="font-semibold text-lg md:text-xl">#{ winner.rankingvalue } - {winner.name}</h2>
                    <div className="text-sm font-medium text-gray-400 dark:text-gray-100"
                    >{winner.walletaddress}</div>
                  </div>
                </div>
              ))}
            </div>
            {(
              <Button
                className="mt-4 w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => pushOnChain()}>Push onChain!</Button>
            )}
          </div>
        ) : warning
      }
    </main>
  );
}
