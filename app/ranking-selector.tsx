'use client';

import { RespectUser } from '@/lib/dtos/respect-user.dto';
import { Suspense, useEffect, useState } from 'react';
import { Alert } from '@/components/ui/alert';
import {
  ConsensusSessionSetupModel,
  Vote
} from '@/lib/models/consensus-session-setup.model';
import {
  getCurrentVotesForSessionByRankingAction,
  getGroupMemberCountAction,
  getRemainingAttendeesForSessionAction,
  getRemainingRankingsForSessionAction,
  hasConsensusOnRankingAction,
  isLoggedInUserAdmin,
  setSingleRankingConsensusStatusAction,
  setSingleVoteAction
} from '@/app/actions';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { VOTING_ROUND_POLLING_INTERVAL } from '../data/constants/app_constants';
import * as React from 'react';
import {
  Box,
  chakra,
  Container,
  Divider,
  Spinner
} from '@chakra-ui/react';

// TODO: https://tailwindcomponents.com/component/radio-buttons

export function RankingSelector({
  consensusSessionId,
  rankingConfig,
  setSession
}: {
  consensusSessionId: number;
  rankingConfig: ConsensusSessionSetupModel;
  setSession: (session: ConsensusSessionSetupModel) => void;
}) {
  const router = useRouter();
  const [votingRound, setVotingRound] = useState<Vote[]>([]);
  const [currentRankNumber, setCurrentRankNumber] = useState<number | null>(
    null
  );
  const [isAdmin, setIsAdmin] = useState(false);
  const [consensusReached, setConsensusReached] = useState(false);
  const [hasClickedRadionButton, setHasClickedRadionButton] = useState(false);
  const [groupCount, setGroupCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const fetchAvailableRankings = async (): Promise<number | null> => {
    return getRemainingRankingsForSessionAction(consensusSessionId).then(
      (remainingRankings: Array<number> | undefined) => {
        if (
          rankingConfig.rankingScheme === 'numeric-descending' &&
          remainingRankings
        ) {
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
      }
    );
  };

  // When the ranking changes, fetch the current voting round
  const fetchVotingRound = async (ranking: number | null) => {
    if (ranking === null || ranking === 0) {
      return;
    }
    const currentVotesResp = await getCurrentVotesForSessionByRankingAction(
      consensusSessionId,
      ranking
    );
    if (Array.isArray(currentVotesResp) && currentVotesResp.length > 0) {
      setVotingRound(currentVotesResp as Vote[]);
    }
    const totalVotes = currentVotesResp.reduce(
      (acc, ranking) => acc + ranking.count,
      0
    );
    setTotalCount(totalVotes);
    updateAttendees(consensusSessionId);
  };

  const fetchConsensusStatus = async (ranking: number | null) => {
    hasConsensusOnRankingAction(consensusSessionId, ranking || 0).then(
      (hasConsensus) => {
        setConsensusReached(hasConsensus);
      }
    );
  };

  // Short Poll: first execute the fetchAvailableRankings function, then pass the result to fetchConsensusStatus
  const fetchCurrentVotingInfo = async () => {
    return fetchAvailableRankings().then((ranking) => {
      fetchConsensusStatus(ranking);
      return fetchVotingRound(ranking);
    });
  };

  useEffect(() => {
    getGroupMemberCountAction(consensusSessionId).then((count:number) => {
      setGroupCount(count);
    });

    isLoggedInUserAdmin().then((isAdmin) => {
      setIsAdmin(isAdmin);
    });
    fetchCurrentVotingInfo().then(() => {
      setLoading(false);
    });

    const interval = setInterval(
      fetchCurrentVotingInfo,
      VOTING_ROUND_POLLING_INTERVAL
    );
    setIntervalId(interval);

    return () => clearInterval(interval);
  }, []);

  if (currentRankNumber === 0) {
    clearInterval(intervalId!);
    router.push(`/play/${consensusSessionId}/final`);
  }

  function setRanking(
    walletAddress: string,
    attestation: 'upvote' | 'downvote'
  ) {
    if (!walletAddress || !attestation) {
      return;
    }
    const user = rankingConfig.attendees.find(
      (user: RespectUser) => user.walletaddress === walletAddress
    );
    if (user && rankingConfig.rankingScheme === 'numeric-descending') {
      handleNumericVote(user);
    }
  }

  function handleNumericVote(user: RespectUser) {
    if (!user || !currentRankNumber) {
      return;
    }
    setSingleVoteAction(
      consensusSessionId,
      currentRankNumber!,
      user.walletaddress
    )
      .then((currentVotesResp) => {
        if (Array.isArray(currentVotesResp) && currentVotesResp.length > 0) {
          setVotingRound(currentVotesResp as Vote[]);
          const totalVotes = currentVotesResp.reduce(
            (acc, ranking) => acc + ranking.count,
            0
          );
          setTotalCount(totalVotes);
        }
        setHasClickedRadionButton(true);
      })
      .catch(() => toast.error('Oops! An error occured, please try again!'));
  }

  function updateAttendees(consSessionIdToUpdate: number) {
    getRemainingAttendeesForSessionAction(consSessionIdToUpdate).then(
      (remainingAttendees: Array<any>) => {
        if (remainingAttendees.length === 0) {
          toast.success(
            'You have successfully reached consensus on this topic!'
          );
        } else {
          rankingConfig.attendees = remainingAttendees;
          setSession({
            ...rankingConfig,
            votes: []
          });
        }
      }
    );
  }

  function nextLevel() {
    if (currentRankNumber === null) return;
    const nextRankNumber =
      rankingConfig.rankingScheme === 'numeric-descending'
        ? currentRankNumber - 1
        : currentRankNumber + 1;
    setCurrentRankNumber(nextRankNumber);
    setSingleRankingConsensusStatusAction(consensusSessionId, currentRankNumber)
      .then(() => {
        toast.success('Consensus Saved!');
        fetchVotingRound(nextRankNumber);
      })
      .catch(() => toast.error('Oops! An error occured, please try again!'));
  }

  const calculateRankingPercentageForCandidate = (user: RespectUser) => {
    const totalVotes = votingRound.reduce(
      (acc, ranking) => acc + ranking.count,
      0
    );
    const candidateSupportVotes =
      votingRound.find(
        (ranking) => ranking.walletaddress === user.walletaddress
      )?.count || 0;
    return Math.round((candidateSupportVotes / totalVotes || 0) * 100);
  };

  // <pre>Rankings: { JSON.stringify(rankings[currentRankNumber], null, 2) }</pre>

  return (
    <Suspense fallback={<Spinner m={10} />}>
      <Container maxW="6xl" py={10} px={4}>
        <Box
          border="1px solid"
          borderColor="gray.100"
          padding={5}
          rounded="md"
          boxShadow="lg"
          overflow="hidden"
        >

            <chakra.h3
              fontSize="xl"
              fontWeight="bold"
              textAlign="center"
              color="gray.600"
            >
              Voting Level: {currentRankNumber}
            </chakra.h3>
            <chakra.h4
              fontSize="md"
              fontWeight="bold"
              textAlign="center"
              color="gray.600">
              {totalCount} Votes cast by {groupCount} Attendees
            </chakra.h4>

          <Divider />
          {consensusReached && isAdmin && (
            <Alert
              message={'You have successfully reached consensus on this topic!'}
              variant={'success'}
              callback={nextLevel}
            />
          )}
          {consensusReached && !isAdmin && (
            <Alert
              message={'You have successfully reached consensus on this topic!'}
              variant={'success'}
            />
          )}
          <form className="border shadow-sm rounded-lg">
            {rankingConfig?.attendees?.map((user: RespectUser) => (
              <div key={user.walletaddress} className={'flex items-center'}>
                <div className={'flex-grow-0 p-4'}>
                  <input
                    type={'radio'}
                    name={'rankings'}
                    value={'upvote'}
                    onChange={() => setRanking(user.walletaddress, 'upvote')}
                  />
                </div>
                <div
                  className={`w-full p-4 ${user.loggedin ? 'border-b dark:border-neutral-700' : 'border-b dark:border-red-500'}`}
                >
                  <div>
                    <label className="text-lg font-medium text-gray-900 dark:text-gray-100 mr-2">
                      {user.name}
                    </label>
                    <div className="text-sm font-medium text-gray-400 dark:text-gray-100">
                      {user.walletaddress}
                    </div>
                  </div>
                  {hasClickedRadionButton && (
                    <div>
                      <div
                        className={
                          `ms-[calc(${calculateRankingPercentageForCandidate(user)}%-1.25rem)] ` +
                          'inline-block mb-2 py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500'
                        }
                      >
                        {`${calculateRankingPercentageForCandidate(user)}%`}
                      </div>
                      <div
                        className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                        role="progressbar"
                      >
                        <div
                          style={{
                            width: `${calculateRankingPercentageForCandidate(user)}%`
                          }}
                          className={`flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500`}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </form>
        </Box>
      </Container>
    </Suspense>
  );
}
