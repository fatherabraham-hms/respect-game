'use client';

import { useEffect, useState } from 'react';
import { ConsensusSessionSetupModel } from '@/lib/models/consensus-session-setup.model';
import { RankingSelector } from '@/app/ranking-selector';
import { getConsensusSetupAction } from '@/app/actions';

export default function IndexPage({ params }: { params: { sessionid: string } }) {
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

  let visibleElements = (<h1>Loading...</h1>);

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

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Cast your Vote</h1>
      </div>
      {visibleElements}
    </main>
  );
}
