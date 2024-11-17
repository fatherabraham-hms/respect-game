'use client';
import { getConsensusSessionWinnersAction } from '@/app/actions';
import { useEffect, useMemo, useState } from 'react';
import { ConsensusWinnerModel } from '@/lib/models/consensus-winner.model';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useOrclient } from '@ordao/privy-react-orclient';
import { Spinner } from '@chakra-ui/react';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { hexlify } from '@ethersproject/bytes';
import toast from 'react-hot-toast';
import { randomBytes } from 'crypto';

export default function IndexPage({
                                    params
                                  }: {
  params: { sessionid: string };
}) {
  const [consensusRankings, setConsensusRankings] = useState<
    ConsensusWinnerModel[]
  >([]);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const {
    user,
  } = usePrivy();

  // const contact = getContract({
  //   address: '',
  //   chain: sepolia,
  //   client: null
  // });

  let warning = (
    <div className="flex items-center justify-center h-96">
      <h1 className="font-semibold text-lg md:text-2xl">
        Looks like you're not a member of consensus session #{params?.sessionid}
        , sorry!
      </h1>
    </div>
  );

  useEffect(() => {
    getConsensusSessionWinnersAction(parseInt(params.sessionid)).then(
      (winnersResp) => {
        if (winnersResp && winnersResp.length > 0) {
          const results = winnersResp as unknown as ConsensusWinnerModel[];
          setConsensusRankings(results);
          setLoading(false);
        }
      }
    );
  });

  const wallet = user?.wallet;
  const conWallets = useWallets();
  // TODO: Is this the right way to select a wallet?
  const userWallet = useMemo(() => {
    if (conWallets && conWallets.ready) {
      return conWallets.wallets.find(w => w.address === wallet?.address);
    }
  }, [wallet]);

  const orclient = useOrclient('op-sepolia-1', userWallet);

  async function makeOrecProposal() {
    console.log('click');
    if (orclient) {
      toast.loading('Making proposal..');
    const rankings = consensusRankings.map((winner) => winner.walletaddress);

      // This request object has to be the same for all participants of a breakout room.
      await orclient.proposeBreakoutResult({
        groupNum: 1,
        meetingNum: 10,
        rankings: rankings,
        // Metadata field is optional.
        metadata: {
          // Could use this to provide names for each rank
          propDescription: hexlify(randomBytes(8))
        }
      });
    } else {
      toast.error('Could not connect to orclient/blockchain');
    }
  }

  function pushOnChain() {
    makeOrecProposal().then(() => {
      toast.success('Submitted On Chain!');
    });
  }

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Final Consensus</h1>
      </div>
      {(isLoading && <Spinner m={10} />) || (
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-lg md:text-2xl">Rankings</h1>
          <div className="flex flex-col">
            {consensusRankings.map((winner) => (
              <div key={winner.walletaddress} className="flex-col">
                <div className="m-4">
                  <h2 className="font-semibold text-lg md:text-xl">
                    #{winner.rankingvalue} - {winner.name}
                  </h2>
                  <div className="text-sm font-medium text-gray-400 dark:text-gray-100">
                    {winner.walletaddress}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {
            <Button
              className="mt-4 w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => pushOnChain()}
            >
              Push onChain!
            </Button>
          }
        </div>
      )}
    </main>
  );
}
