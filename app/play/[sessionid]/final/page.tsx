'use client';
import { getConsensusSessionWinnersAction } from '@/app/actions';
import { useEffect, useMemo, useState } from 'react';
import { ConsensusWinnerModel } from '@/lib/models/consensus-winner.model';
import { Button } from '@/components/ui/button';
import { Spinner } from '@chakra-ui/react';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import toast from 'react-hot-toast';
import { randomBytes } from 'crypto';
import { useOrclient } from '@ordao/privy-react-orclient';
import { useRouter } from 'next/navigation';
import { DeploymentSpec } from "@ordao/orclient/createOrclient.js";

export default function IndexPage({params}: { params: { sessionid: string };
}) {
  const [consensusRankings, setConsensusRankings] = useState<
    ConsensusWinnerModel[]
  >([]);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const {
    user,
  } = usePrivy();
  // const conWallets = useWallets();

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
    // getOrclient();

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

  // function getOrclient() {
  //   const wallet = user?.wallet;
  //   // TODO: Is this the right way to select a wallet?
  //   const userWallet = useMemo(() => {
  //     if (conWallets && conWallets.ready) {
  //       return conWallets.wallets.find(w => w.address === wallet?.address);
  //     }
  //   }, [wallet]);
  //
  //   const orclient = useOrclient('op-sepolia-1', userWallet);
  //   if (orclient) {
  //     return orclient;
  //   } else {
  //     toast.error('Could not connect to orclient/blockchain');
  //     return null;
  //   }
  // }

  async function makeOrecProposal() {
    console.log('click');
    if (orclient) {
      toast.loading('Making proposal..');
      const rankings = consensusRankings.map((winner) => winner.walletaddress);
      const rankedNames = consensusRankings.reduce<string>((prev, current, index) => {
        return prev + `, ${current.name}`;
      }, "");

      // This request object has to be the same for all participants of a breakout room.
      await orclient.proposeBreakoutResult({
        // TODO: set real groupNum and meetingNum
        groupNum: 1,
        meetingNum: 10,
        rankings: rankings,
        // Metadata field is optional.
        metadata: {
          // Could use this to provide names for each rank
          propTitle: `Session ${params.sessionid}`,
          propDescription: rankedNames
        }
      });
      console.log("Propose breakout returned");
    } else {
      toast.error('Could not connect to orclient/blockchain');
    }
  }

  function pushOnChain() {
    makeOrecProposal().then(() => {
      toast.success('Submitted On Chain!');
    });
    // const params = new URLSearchParams();
    // params.append('groupnumber', '1');
    // consensusRankings.map((winner, index) => {
    //   if (winner) {
    //     params.append(`vote${index + 1}`, winner.walletaddress);
    //   }
    // });
    // // add the params to the url
    // window.open(`https://of.frapps.xyz?${params.toString()}`, '_blank', 'noopener,noreferrer');
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
