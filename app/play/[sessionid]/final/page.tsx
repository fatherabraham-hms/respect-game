import { getConsensusSessionWinnersAction } from '@/app/actions';
import { ConsensusWinnersDto } from '@/lib/dtos/consensus-winners.dto';

export default function IndexPage({ params }: { params: { sessionid: string } }) {

let finalResults: ConsensusWinnersDto[] = [];
let warning = (
  <div className="flex items-center justify-center h-96">
    <h1 className="font-semibold text-lg md:text-2xl">Looks like you're not a member of consensus session
      #{params?.sessionid}, sorry!</h1>
  </div>
);
  getConsensusSessionWinnersAction(parseInt(params.sessionid)).then((winners) => {
    finalResults = winners[0] as unknown as ConsensusWinnersDto[];
  });

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Final Consensus</h1>
      </div>
      {
        finalResults.length > 0 ? (
          <div className="flex flex-col items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Winners</h1>
            <div className="flex flex-col items-center">
              {finalResults.map((winner) => (
                <div key={winner.walletaddress} className="flex flex-col items-center">
                  <div>
                    <label className="text-lg font-medium text-gray-900 dark:text-gray-100">{winner.name}</label>
                    <div className="text-sm font-medium text-gray-400 dark:text-gray-100"
                    >{winner.walletaddress}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : warning
      }
    </main>
  );
}
