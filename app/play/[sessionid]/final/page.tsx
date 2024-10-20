'use client';
import { getActiveGroupIdBySessionIdAction, getConsensusSessionWinnersAction } from '@/app/actions';
import { useEffect, useMemo, useState } from 'react';
import { ConsensusWinnerModel } from '@/lib/models/consensus-winner.model';
import { Button } from '@/components/ui/button';
import { ConnectedWallet, usePrivy, useWallets } from '@privy-io/react-auth';
// import { hexlify, randomBytes } from 'ethers';
// import { RespectBreakoutRequest } from '@/lib/ortypes/dist/orclient';
import toast from 'react-hot-toast';
import { OR_CONFIG_OP_MAIN, OR_CONFIG_OP_SEPOLIA } from '../../../../data/constants/app_constants';

export default function IndexPage({ params }: { params: { sessionid: string } }) {
  const [consensusRankings, setConsensusRankings] = useState<ConsensusWinnerModel[]>([]);
  const [orClient, setOrClient] = useState<any>(null);
  const [groupId, setGroupId] = useState<number>(0);
  const { ready, authenticated, user } = usePrivy();
  const conWallets = useWallets();
  const wallet = user?.wallet;

  let config = OR_CONFIG_OP_MAIN;

  if (process.env.NODE_ENV === 'development') {
    config = OR_CONFIG_OP_SEPOLIA;
  }

// TODO: Is this the right way to select a wallet?
  const userWallet: ConnectedWallet | undefined = useMemo(() =>{
    if (conWallets) {
      return conWallets.wallets.find(w => w.address === wallet?.address);
    }
  }, [wallet]);

let warning = (
  <div className="flex items-center justify-center h-96">
    <h1 className="font-semibold text-lg md:text-2xl">Looks like you're not a member of consensus session
      #{params?.sessionid}, sorry!</h1>
  </div>
);

useEffect(() => {
  const cleanSessionId = sanitizeSessionId(params.sessionid);
  getActiveGroupIdBySessionIdAction(cleanSessionId).then((groupId) => {
    if (groupId) {
      setGroupId(groupId);
    }
  });
  getConsensusSessionWinnersAction(cleanSessionId).then((winnersResp) => {
    if (winnersResp && winnersResp.length > 0) {
      const results = winnersResp as unknown as ConsensusWinnerModel[];
      setConsensusRankings(results);
    }
  });
}, []);

async function pushOnChain() {
    console.log("click");
    if (ready && authenticated && orClient && consensusRankings.length > 0 && groupId > 0) {
      // After privy shows "all done" when using embeded wallet, it still has to make one request
      // to store a proposal.
      await orClient.proposeCustomSignal({
        signalType: 1,
        data: hexlify(randomBytes(2))
      });
      console.log("done");
      const rankings = consensusRankings.map((winner) => winner.walletaddress);
      // Example: breakout result submission
      const req: RespectBreakoutRequest = {
        groupNum: groupId,
        meetingNum: sanitizeSessionId(params.sessionid),
        rankings: rankings
      }
      await orClient.proposeBreakoutResult(req);
      toast.success('Submitted successfully');
    } else {
      toast.error('Error submitting');
    }
}

  function sanitizeSessionId(sessionid: string): number {
    const clean = sessionid.replace(/[^0-9]/g, '');
    return parseInt(clean);
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
