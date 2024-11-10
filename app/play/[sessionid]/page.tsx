'use client';

import { Suspense, useEffect, useState } from 'react';
import { ConsensusSessionSetupModel } from '@/lib/models/consensus-session-setup.model';
import { RankingSelector } from '@/app/ranking-selector';
import { getConsensusSetupAction } from '@/app/actions';
import { Spinner } from '@chakra-ui/react';
import * as React from 'react';
import { SESSION_POLLING_INTERVAL } from '../../../data/constants/app_constants';

export default function IndexPage({
  params
}: {
  params: { sessionid: string };
}) {
  if (!params.sessionid) {
    return null;
  }
  const consensusSessionId = parseInt(params.sessionid);
  const [currentSessionSetup, setCurrentSessionSetup] = useState({
    groupNum: 1,
    attendees: [],
    rankingScheme: 'numeric-descending',
    votes: []
  } as ConsensusSessionSetupModel | null);
  const [loading, setLoading] = useState(true);

  function fetchConsensusSetup() {
    getConsensusSetupAction(consensusSessionId).then((setup) => {
      setCurrentSessionSetup(setup);
      setLoading(false);
    });
    // getConsensusSession(sessionId).then((session) => {
    //   if (session) {
    //     setSessionMetadata(session);
    //   }
    // });
  }

  useEffect(() => {
      fetchConsensusSetup();
      const interval = setInterval(
        fetchConsensusSetup,
        SESSION_POLLING_INTERVAL
      );
      return () => clearInterval(interval);
  }, []);

  let visibleElements = <Spinner m={10} />;

  if (currentSessionSetup !== null && consensusSessionId > 0) {
    visibleElements = (
      <RankingSelector
        consensusSessionId={consensusSessionId}
        rankingConfig={currentSessionSetup}
        setSession={setCurrentSessionSetup}
      />
    );
  } else if (currentSessionSetup === null && !loading) {
    visibleElements = (
      <div className="flex items-center justify-center h-96">
        <h1 className="font-semibold text-lg md:text-2xl">
          Sorry, this session has ended.
        </h1>
      </div>
    );
  }

  return <Suspense fallback={<Spinner m={10} />}>{visibleElements}</Suspense>;
}
