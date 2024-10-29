'use client';

import { Suspense, useEffect, useState } from 'react';
import { ConsensusSessionSetupModel } from '@/lib/models/consensus-session-setup.model';
import { RankingSelector } from '@/app/ranking-selector';
import { getConsensusSetupAction } from '@/app/actions';
import { Spinner } from '@chakra-ui/react';
import * as React from 'react';

export default function IndexPage({
  params
}: {
  params: { sessionid: string };
}) {
  const [consensusSessionId, setConsensusSessionId] = useState<number>(0);
  const [currentSessionSetup, setCurrentSessionSetup] = useState({
    groupNum: 1,
    attendees: [],
    rankingScheme: 'numeric-descending',
    votes: []
  } as ConsensusSessionSetupModel | null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.sessionid.length > 0) {
      const mySessionId = parseInt(params.sessionid);
      setConsensusSessionId(mySessionId);
      getConsensusSetupAction(mySessionId).then((consensusSessionSetup) => {
        setCurrentSessionSetup(consensusSessionSetup);
        setLoading(false);
      });
    }
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
