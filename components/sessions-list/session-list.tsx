'use client';
import { useState, useEffect } from 'react';
import { getRecentSessionsForUserWalletAddressAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { SESSION_POLLING_INTERVAL } from '../../data/constants/app_constants';

export function SessionList() {
  const router = useRouter();
  const [recentSessions, setRecentSessions] = useState<{
    sessionid: number;
    sessionStatus: number | null;
    updated: Date;
  }[]>([]);

  const getSessions = async () => {
    return getRecentSessionsForUserWalletAddressAction().then((sessions) => {
      setRecentSessions(sessions);
    });
  };

  useEffect(() => {
    getSessions();
    const interval = setInterval(getSessions, SESSION_POLLING_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  function joinSession(sessionid: number) {
    router.push(`/play/${sessionid}`);
  }

  return (
    <div>
      <div>
        <h2>Recent Sessions</h2>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Session Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {recentSessions?.length > 0 &&
                      recentSessions.map((session) => (
                        <tr key={session.sessionid}>
                          <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                            <a
                              className={
                                'class="text-blue-600 hover:text-blue-500 decoration-2 hover:underline focus:outline-none focus:underline opacity-90'
                              }
                              href={`/play/${session.sessionid}`}
                            >
                              Session #{session.sessionid}
                            </a>
                            &#x2003;
                            {session.sessionStatus === 1 && (
                              <Button
                                className={
                                  'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 text-sm rounded'
                                }
                                onClick={() => joinSession(session.sessionid)}
                              >
                                Join
                              </Button>
                            )}
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {session.sessionStatus}
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {session.updated.toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {!recentSessions ||
                  (recentSessions.length === 0 && <h2>No Sessions to show</h2>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
