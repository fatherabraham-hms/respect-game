'use client';

import { User } from '@/lib/dtos/user.dto';
import { useEffect, useState } from 'react';
import { Alert } from '@/components/ui/alert';
import { ConsensusSessionSetupModel, Vote } from '@/lib/models/consensus-session-setup.model';
import {
  getCurrentVotesForSessionByRankingAction, getRemainingAttendeesForSessionAction, getRemainingRankingsForSessionAction,
  isLoggedInUserAdmin,
  setSingleRankingConsensusStatusAction,
  setSingleVoteAction
} from '@/app/actions';
import { CONSENSUS_LIMIT } from '../data/constants/app_constants';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

// TODO: https://tailwindcomponents.com/component/radio-buttons

export function RankingSelector({ consensusSessionId, rankingConfig, setSession }: { consensusSessionId: number, rankingConfig:  ConsensusSessionSetupModel, setSession: (session: ConsensusSessionSetupModel) => void }) {
  const router = useRouter();
  const [votingRound, setVotingRound] = useState<Vote[]>([]);
  const [currentRankNumber, setCurrentRankNumber] = useState(rankingConfig.rankingScheme === 'numeric-descending' ? 6 : 1);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    isLoggedInUserAdmin().then((isAdmin) => {
      setIsAdmin(isAdmin);
    });
    const fetchAvailableRankings = async (): Promise<number | null> => {
      return getRemainingRankingsForSessionAction(consensusSessionId).then((remainingRankings: Array<number> | undefined) => {
        if (rankingConfig.rankingScheme === 'numeric-descending' && remainingRankings) {
          if (remainingRankings.length > 0) {
            setCurrentRankNumber(remainingRankings[0]);
            return remainingRankings[0] as number;
          }
          if (remainingRankings.length === 0) {
            setCurrentRankNumber(0);
            return 0;
          }
          return null;
        }
        return null;
      });
    }
    // fetch the current voting round with short polling
    const fetchVotingRound = async (ranking: number | null) => {
      if (ranking === null || ranking === 0) {
        return;
      }
      const currentVotesResp = await getCurrentVotesForSessionByRankingAction(
        consensusSessionId,
        ranking
      );
      if(Array.isArray(currentVotesResp) && currentVotesResp.length > 0) {
        setVotingRound(currentVotesResp as Vote[]);
      }
    };
    //chain the two fetches passing the ranking returned by the first fetch
    const fetchCurrentVotingInfo = () => fetchAvailableRankings().then((ranking) => {
      return fetchVotingRound(ranking);
    });
    fetchCurrentVotingInfo();

    const interval = setInterval(fetchCurrentVotingInfo, 5000);

    return () => clearInterval(interval);
  }, []);

  if (currentRankNumber === 0) {
    router.push(`/play/${consensusSessionId}/final`);
  }

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
    return totalVotes >= attendees * CONSENSUS_LIMIT;
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
    ).then(() => {}).catch(() => toast.error('Oops! An error occured, please try again!'));
  }

  function nextLevel() {
    const nextRankNumber = rankingConfig.rankingScheme === 'numeric-descending' ? currentRankNumber - 1 : currentRankNumber + 1;
    setCurrentRankNumber(nextRankNumber);
    setSingleRankingConsensusStatusAction(consensusSessionId, currentRankNumber).then(
      () => {
        toast.success('Consensus Saved!');
        getRemainingAttendeesForSessionAction(consensusSessionId).then((remainingAttendees: Array<any>) => {
          if (remainingAttendees.length === 0) {
            toast.success('You have successfully reached consensus on this topic!');
          } else {
            rankingConfig.attendees = remainingAttendees;
            setSession({
              ...rankingConfig,
              votes: []
            });
          }
        });
      }
    ).catch(() => toast.error('Oops! An error occured, please try again!'));
  }

  const calculateRankingPercentageForCandidate = (user: User) => {
    const totalVotes = votingRound.reduce((acc, ranking) => acc + ranking.count, 0);
    const candidateSupportVotes = votingRound.find((ranking) => ranking.walletaddress === user.walletaddress)?.count || 0;
    return Math.round(((candidateSupportVotes / totalVotes) || 0) * 100);
  }

  // <pre>Rankings: { JSON.stringify(rankings[currentRankNumber], null, 2) }</pre>

  return (
    <>
      {checkConsensusReached() && isAdmin &&
        <Alert message={'You have successfully reached consensus on this topic!'} variant={'success'}
               callback={nextLevel} />}
      {checkConsensusReached() && !isAdmin &&
        <Alert message={'You have successfully reached consensus on this topic!'} variant={'success'} />}
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
