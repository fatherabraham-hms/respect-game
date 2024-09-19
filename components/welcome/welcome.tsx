'use client';
import { useState, useEffect } from 'react';
import { getRecentSessionsForUserWalletAddressAction } from '@/app/actions';

export function Welcome() {
  const [recentSessions, setRecentSessions] = useState<{
    sessionid: number;
    sessionStatus: number | null;
    updated: Date;
  }[]>([]);

  useEffect(() => {
    getRecentSessionsForUserWalletAddressAction().then((sessions) => {
      setRecentSessions(sessions);
    });
  }, []);

  return (
    <div>
      <h1>Welcome to Fractalgram!</h1>
      <h2>
        This is a voting application to arrive at consensus on rankings 6 hightest - 1 lowest.
      </h2>
      <p>Respect tokens are distributed based on the consensus rankings.</p>
      <p>To join a session, click on the link below or ask your group leader for the url.</p>
      <br />
      <br />
      <br />
      <div>
        <h2>Recent Sessions</h2>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead>
                  <tr>
                    <th scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Session Number
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Status
                    </th>
                    <th scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Created
                    </th>
                  </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {recentSessions.map((session) => (
                    <tr key={session.sessionid}>
                      <td
                        className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                        <a
                          className={'class="text-blue-600 hover:text-blue-500 decoration-2 hover:underline focus:outline-none focus:underline opacity-90'}
                          href={`/play/${session.sessionid}`}>Session
                          #{session.sessionid}</a>
                      </td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{session.sessionStatus}</td>
                      <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">{session.updated.toLocaleDateString()}</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
