'use client';

import useSWR from 'swr';
import { Spinner } from '@/components/icons';
import { User } from '@/lib/dtos/user.dto';
import { ConsensusSessionDto } from '@/lib/dtos/consensus-session.dto';
import { useState } from 'react';

const fetcher = (...args: any[]) => fetch(`/api/users`).then(res => res.json())
function useUsers () {
  const { data, error, isLoading } = useSWR(`/api/users`, fetcher)

  return {
    users: data?.users || [],
    newOffset: data?.newOffset,
    isLoading,
    isError: error
  }
}

export function RankingSelector({ session, setSession }: { session: ConsensusSessionDto, setSession: (session: ConsensusSessionDto) => void }) {
  const [rankings, setRankings] = useState({});
  const { users, newOffset, isLoading, isError } = useUsers();

  if (isLoading) return <Spinner />

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

    let existingRanking = session.rankings[user.id];
    // if they are not yet ranked, add them with 0 votes
    if (!existingRanking) {
      session.rankings[user.id] = {
        ...user,
        votes: 0
      };
      existingRanking = session.rankings[user.id];
    }

    if (attestation === 'upvote') {
      existingRanking.votes++;
    } else if (attestation === 'downvote') {
      existingRanking.votes <= 1 ? existingRanking.votes = 0 : existingRanking.votes--;
    }
  }

  return (
    <>
      <form className="border shadow-sm rounded-lg">
            <pre>Session: {JSON.stringify(session, null, 2)}</pre>
            {users.map((user: User) => (
              <pre>{JSON.stringify(user, null, 2)}</pre>
              // <div>
              // <div
              // className="inline-block mb-2 ms-[calc(25%-1.25rem)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg dark:bg-blue-800/30 dark:border-blue-800 dark:text-blue-500">
              // 25%
              // </div>
              // <div className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar">
              // <div
              // className="w-3/12 flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
              // ></div>
              // </div>
              // </div>
            ))}
      </form>
    </>
  );
}
