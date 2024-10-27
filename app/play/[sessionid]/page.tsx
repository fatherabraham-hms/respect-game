'use client';

import { Suspense, useEffect, useState } from 'react';
import { ConsensusSessionSetupModel } from '@/lib/models/consensus-session-setup.model';
import { RankingSelector } from '@/app/ranking-selector';
import { getConsensusSetupAction } from '@/app/actions';
import {
  Container,
  Spinner
} from '@chakra-ui/react';
import * as React from 'react';
import { Link } from '@chakra-ui/next-js';
import { Logo } from '@/components/icons';
import { NavSidebar } from '@/components/app-shell/nav-sidebar';
import { UserPill } from '@privy-io/react-auth/ui';

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

  return (
    <main className="flex flex-1 flex-col">
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-5">
              <Link className="flex items-center gap-2 font-semibold" href="/">
                <Logo />
                <span className="">ACME</span>
              </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <NavSidebar />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
            <Link
              className="flex items-center gap-2 font-semibold lg:hidden"
              href="/"
            >
              <Logo />
              <span className="">ACME</span>
            </Link>
            <UserPill />
          </header>
          <Container maxW="6xl" py={10} px={4}>

              <Suspense fallback={<Spinner m={10} />}>
                {visibleElements}
              </Suspense>

          </Container>
        </div>
      </div>
    </main>
  );
}
