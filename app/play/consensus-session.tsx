"use client";
import { useContext, useState } from 'react';
import { RankingSelector } from '@/app/ranking-selector';
import useSWR from 'swr';
import { Button } from '@/components/ui/button';
import { AuthContext } from '../../data/context/Contexts';
import { ConsensusSessionSetupModel } from '@/lib/models/consensus-session-setup.model';

export function ConsensusSession() {
  const [currentSession, setCurrentSession] = useState({
    groupNum: 1,
    attendees: [],
    rankingScheme: 'numeric-descending',
    rankings: {}
  } as ConsensusSessionSetupModel);

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

  const authContext = useContext(AuthContext);

  function handleStartSession() {
    const mySession = currentSession as ConsensusSessionSetupModel;
    // createConsensusSessionAndUserGroupAction(mySession).then(() => {
    //   setCurrentSession({
    //     ...mySession,
    //     attendees: users
    //   });
    // });
  }

  return (
   currentSession.attendees.length === 0 && authContext.isAdmin ?
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
