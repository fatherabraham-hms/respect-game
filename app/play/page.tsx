'use client';

import { SessionList } from '@/components/sessions-list/session-list';

export default function IndexPage() {

  return (
    <main className="flex flex-1 flex-col p-4 md:p-6">
      <div className="flex items-center mb-8">
        <h1 className="font-semibold text-lg md:text-2xl">Play the Respect Game</h1>
      </div>
      <div className="flex items-center justify-center h-96">
        <SessionList/>
      </div>
    </main>
  );
}
