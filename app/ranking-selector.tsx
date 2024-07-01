'use client';

import { User } from '@/lib/dtos/user.dto';
import { ConsensusSessionDto } from '@/lib/dtos/consensus-session.dto';
import { useState } from 'react';
import { Alert } from '@/components/ui/alert';
import { UserRanking } from '@/lib/dtos/user-ranking.dto';

// TODO: https://tailwindcomponents.com/component/radio-buttons

export function RankingSelector({ session, setSession }: { session: ConsensusSessionDto, setSession: (session: ConsensusSessionDto) => void }) {
  const [votingRound, setVotingRound] = useState<{ [index: number]: UserRanking }>({});
  const [currentRankNumber, setCurrentRankNumber] = useState(session.rankingScheme === 'numeric-descending' ? 6 : 1);

  // STATE
  function checkConsensusReached() {
    const totalVotes = Object.values(votingRound).reduce((acc, ranking) => acc + ranking.votes, 0);
    const attendees = session.attendees.length;
    return totalVotes >= attendees * .75;
  }

  function setRanking(userId: number, attestation: 'upvote' | 'downvote') {
    if (!userId || !attestation) {
      return;
    }
    const user = session.attendees.find((user) => user.id === userId);
    if (user && session.rankingScheme === 'numeric-descending') {
      handleNumericVote(user, attestation);
    }
  }

  function handleNumericVote(user: User, attestation: 'upvote' | 'downvote') {
    if (!user || !attestation) {
      return;
    }


    let existingRanking = votingRound[currentRankNumber];
    const rankingsCopy = { ...votingRound };

    // if they are not yet ranked, add them with 0 votes
    if (typeof existingRanking?.id === 'undefined') {
      rankingsCopy[currentRankNumber] = {
        ...user,
        votes: 0
      };
    // if they are already ranked, update their votes
    } else if (existingRanking?.id === user.id) {
      rankingsCopy[currentRankNumber] = { ...user, votes: existingRanking.votes };
    } else {
      rankingsCopy[currentRankNumber] = { ...user, votes: existingRanking.votes };
    }

    if (attestation === 'upvote') {
      rankingsCopy[currentRankNumber].votes = 1;
    } else if (attestation === 'downvote') {
      rankingsCopy[currentRankNumber].votes = 0;
    }
    setVotingRound(rankingsCopy);
  }

  function nextLevel() {
    const winner = getWinner();
    const nextRankNumber = session.rankingScheme === 'numeric-descending' ? currentRankNumber - 1 : currentRankNumber + 1;
    setCurrentRankNumber(nextRankNumber);
    const updatedRankings = { ...votingRound };
    updatedRankings[currentRankNumber] = winner as UserRanking;
    setSession({
      ...session,
      rankings: updatedRankings
    });
  }

  // UTILS
  const getWinner = () => {
    const totalVotes = Object.values(votingRound).reduce((acc, ranking) => acc + ranking.votes, 0);
    const winner = Object.values(votingRound).reduce((acc, ranking) => ranking.votes > acc.votes ? ranking : acc, { votes: 0 });
    return winner.votes >= totalVotes * .75 ? winner : null
  }

  const calculateRankingPercentage = (user: User) => {
    const totalVotes = Object.values(votingRound).reduce((acc, ranking) => acc + ranking.votes, 0);
    const userRanking = votingRound[currentRankNumber]?.walletAddress === user.walletAddress ? votingRound[currentRankNumber] : null;
    if (!userRanking) {
      return 0;
    }
    return (userRanking.votes / totalVotes) * 100;
  }

  const calculateRankingFractionOfTwelve = (user: User) => {
    const totalVotes = Object.values(votingRound).reduce((acc, ranking) => acc + ranking.votes, 0);
    const userRanking = votingRound[currentRankNumber]?.walletAddress === user.walletAddress ? votingRound[currentRankNumber] : null;
    if (!userRanking) {
      return 0;
    }
    const rounded = Math.round((userRanking.votes / totalVotes) * 12);
    return rounded === 12 ? 'full' : `${rounded}/12`;
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
        className="text-sm text-gray-500 dark:text-gray-400">{session.rankingScheme === 'numeric-descending' ? '6 is highest' : '1 is highest'}</span>
      <br />
      <form className="border shadow-sm rounded-lg">
        {/*<pre>Session: {JSON.stringify(session, null, 2)}</pre>*/}
        {session?.attendees?.map((user: User) => (
          // <pre>{JSON.stringify(user, null, 2)}</pre>
          <div key={user.id} className={'flex items-center'}>
            <div className={'flex-grow-0 p-4'}>
              <input type={'radio'} name={'rankings'} value={'upvote'} onChange={() => setRanking(user.id, 'upvote')} />
            </div>
            <div className="w-full p-4 border-b dark:border-neutral-700">
              <div>
                <label className="text-sm font-medium text-gray-900 dark:text-gray-100">{user.name}</label>
                <div>{user.walletAddress}</div>
              </div>
              <div
                className={`ms-[calc(${calculateRankingPercentage(user)}%-1.25rem)] ` + "inline-block mb-2 py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500"}>
                {`${calculateRankingPercentage(user)}%`}
              </div>
              <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                   role="progressbar">
                <div
                  className={`w-${calculateRankingFractionOfTwelve(user)} flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </form>
    </>
  );
}
