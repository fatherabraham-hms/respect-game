"use client";
import { useState } from 'react';
import { ConsensusSessionDto } from '@/lib/dtos/consensus-session.dto';
import { RankingSelector } from '@/app/ranking-selector';

export function ConsensusSession() {
  const [currentSession, setCurrentSession] = useState({
    meetingNum: 1,
    groupNum: 1,
    attendees: [],
    rankingScheme: 'numeric-descending',
    rankings: {}
  } as ConsensusSessionDto);

  // TODO: Set group id creation, so users can be added to breakout groups

  return (
    <RankingSelector session={currentSession} setSession={setCurrentSession}/>
  );
}
