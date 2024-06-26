"use client";
import { useState } from 'react';
import { ConsensusSessionDto } from '@/lib/dtos/consensus-session.dto';
import { RankingSelector } from '@/app/ranking-selector';
import useSWR from 'swr';
import { Button } from '@/components/ui/button';

export function ConsensusSession() {
  const [currentSession, setCurrentSession] = useState({
    meetingNum: 1,
    groupNum: 1,
    attendees: [],
    rankingScheme: 'numeric-descending',
    rankings: {}
  } as ConsensusSessionDto);

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
  const { users } = useUsers();

  function handleStartSession() {
    setCurrentSession({
      ...currentSession,
      attendees: users
    });
  }

  return (
   currentSession.attendees.length === 0 ?
     (
       <Button className="bg-fuchsia-400" onClick={handleStartSession}>Start Session!</Button>
     ) :
      (
        <RankingSelector
          session={currentSession}
          setSession={setCurrentSession}
        />
      )
  );
}
