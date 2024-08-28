'use client';
import { useContext, useState } from 'react';
import { RankingSelector } from '@/app/ranking-selector';
import { AuthContext } from '../../data/context/Contexts';
import { ConsensusSessionSetupModel } from '@/lib/models/consensus-session-setup.model';

export function ConsensusSession() {
  const [currentSession, setCurrentSession] = useState({
    groupNum: 1,
    attendees: [],
    rankingScheme: 'numeric-descending',
    rankings: {}
  } as ConsensusSessionSetupModel);

  return <RankingSelector
      session={currentSession}
      setSession={setCurrentSession}
    />
}
