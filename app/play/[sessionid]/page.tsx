'use client';

import { Suspense } from 'react';
import { RankingSelector } from '@/app/ranking-selector';
import * as React from 'react';
import { Spinner } from '@chakra-ui/react';

export default function IndexPage({
  params
}: {
  params: { sessionid: string };
}) {
  if (!params.sessionid) {
    return null;
  }
  const consensusSessionId = parseInt(params.sessionid);

  let visibleElements = <Spinner m={10} />;

  if (params?.sessionid !== null && consensusSessionId > 0) {
    visibleElements = (
      <RankingSelector
        consensusSessionId={consensusSessionId}
      />
    );
  } else if (params?.sessionid === null) {
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
