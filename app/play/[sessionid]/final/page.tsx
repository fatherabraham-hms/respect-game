'use client';
import { getConsensusSessionWinnersAction } from '@/app/actions';
import { useEffect, useState } from 'react';
import { ConsensusWinnerModel } from '@/lib/models/consensus-winner.model';
import { Button } from '@/components/ui/button';
import { Spinner } from '@chakra-ui/react';

export default function IndexPage({
  params
}: {
  params: { sessionid: string };
}) {
  const [consensusRankings, setConsensusRankings] = useState<
    ConsensusWinnerModel[]
  >([]);
  const [isLoading, setLoading] = useState(true);

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
  }, []);

  function pushOnChain() {
    const params = new URLSearchParams();
    params.append('groupnumber', '1');
    consensusRankings.map((winner, index) => {
      if (winner) {
        params.append(`vote${index + 1}`, winner.walletaddress);
      }
    });
    // add the params to the url
    window.open(`https://of.frapps.xyz?${params.toString()}`, '_blank', 'noopener,noreferrer');
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
              className="mt-4 w-50 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => pushOnChain()}
            >
              Open Frapps Interface
            </Button>
          }
        </div>
      )}
    </main>
  );
}
