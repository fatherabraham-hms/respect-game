'use client';

import { User } from '@/lib/dtos/user.dto';
import { useEffect, useState } from 'react';
import { Alert } from '@/components/ui/alert';
import { ConsensusSessionSetupModel, Vote } from '@/lib/models/consensus-session-setup.model';
import { getCurrentVotesForSessionByRankingAction, setSingleVoteAction } from '@/app/actions';

// TODO: https://tailwindcomponents.com/component/radio-buttons

export function RankingSelector({ consensusSessionId, rankingConfig, setSession }: { consensusSessionId: number, rankingConfig:  ConsensusSessionSetupModel, setSession: (session: ConsensusSessionSetupModel) => void }) {
  const [votingRound, setVotingRound] = useState<Vote[]>([]);
  const [currentRankNumber, setCurrentRankNumber] = useState(rankingConfig.rankingScheme === 'numeric-descending' ? 6 : 1);


  useEffect(() => {
    setCurrentRankNumber(rankingConfig.rankingScheme === 'numeric-descending' ? 6 : 1);
    // fetch the current voting round with short polling
    const fetchVotingRound = async () => {
      const currentVotesResp = await getCurrentVotesForSessionByRankingAction(
        consensusSessionId,
        currentRankNumber
      );
      if(Array.isArray(currentVotesResp) && currentVotesResp.length > 0) {
        console.log('currentRankNumber: ', currentRankNumber);
        console.log('rankingConfig: ', rankingConfig);
        setVotingRound(currentVotesResp as Vote[]);
      }
    };
    fetchVotingRound();

    const interval = setInterval(fetchVotingRound, 5000);

    return () => clearInterval(interval);
  }, []);


  // STATE
  function checkConsensusReached() {
    if (Object.keys(votingRound)?.length === 0) {
      return false;
    }
    const totalVotes = votingRound.reduce((acc, ranking) => acc + ranking.count, 0);
    const attendees = rankingConfig.attendees.length;
    if (attendees === 0) {
      return false;
    }
    return totalVotes >= attendees * .75;
  }

  function setRanking(walletAddress: string, attestation: 'upvote' | 'downvote') {
    if (!walletAddress || !attestation) {
      return;
    }
    const user = rankingConfig.attendees.find((user: User) => user.walletaddress === walletAddress);
    if (user && rankingConfig.rankingScheme === 'numeric-descending') {
      handleNumericVote(user, attestation);
    }
  }

  function handleNumericVote(user: User, attestation: 'upvote' | 'downvote') {
    if (!user || !attestation) {
      return;
    }
    setSingleVoteAction(consensusSessionId,
      rankingConfig,
      currentRankNumber,
      user.walletaddress,
      attestation
    ).then((votesResp: any) => {
        if(Array.isArray(votesResp) && votesResp.length > 0) {
          setVotingRound(votesResp); // deprecated, just use polling instead
        }
    })
  }

  function nextLevel() {
    const nextRankNumber = rankingConfig.rankingScheme === 'numeric-descending' ? currentRankNumber - 1 : currentRankNumber + 1;
    setCurrentRankNumber(nextRankNumber);
    // TODO: update the ranking for the winner on BE
    setSession({
      ...rankingConfig,
      votes: []
    });
  }

  const calculateRankingPercentageForCandidate = (user: User) => {
    const totalVotes = votingRound.reduce((acc, ranking) => acc + ranking.count, 0);
    const candidateSupportVotes = votingRound.find((ranking) => ranking.walletaddress === user.walletaddress)?.count || 0;
    return Math.round(((candidateSupportVotes / totalVotes) || 0) * 100);
  }

  // <pre>Rankings: { JSON.stringify(rankings[currentRankNumber], null, 2) }</pre>

  return (
    <>
      {checkConsensusReached() &&
        <Alert message={'You have successfully reached consensus on this topic!'} variant={'success'}
               callback={nextLevel} />}
      <br />
      <h1 className="text-xl text-fuchsia-900">Now Gathering Consensus for Level: {currentRankNumber}</h1>
      <span
        className="text-sm text-gray-500 dark:text-gray-400">{rankingConfig.rankingScheme === 'numeric-descending' ? '6 is highest' : '1 is highest'}</span>
      <br />
      <form className="border shadow-sm rounded-lg">
        {rankingConfig?.attendees?.map((user: User) => (
          <div key={user.walletaddress} className={'flex items-center'}>
            <div className={'flex-grow-0 p-4'}>
              <input type={'radio'} name={'rankings'} value={'upvote'} onChange={() => setRanking(user.walletaddress, 'upvote')} />
            </div>
            <div className="w-full p-4 border-b dark:border-neutral-700">
              <div>
                <label className="text-lg font-medium text-gray-900 dark:text-gray-100">{user.name}</label>
                <div className="text-sm font-medium text-gray-400 dark:text-gray-100"
                >{user.walletaddress}</div>
              </div>
              <div
                className={`ms-[calc(${calculateRankingPercentageForCandidate(user)}%-1.25rem)] ` + "inline-block mb-2 py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500"}>
                {`${calculateRankingPercentageForCandidate(user)}%`}
              </div>
              <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                   role="progressbar">
                <div
                  style={{ width: `${calculateRankingPercentageForCandidate(user)}%` }}
                  className={`flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </form>
    </>
  );
}
