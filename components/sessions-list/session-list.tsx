'use client';
import { useState, useEffect } from 'react';
import {
  getRecentSessionsForUserWalletAddressAction
} from '@/app/actions';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { SESSION_POLLING_INTERVAL } from '../../data/constants/app_constants';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js';
import { getSessionStatusLabel } from '@/lib/utils';

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
                <TableContainer>
                  <Table>
                    <Thead>
                      <Tr>
                        <Th>Session Number</Th>
                        <Th>Status</Th>
                        <Th>Created</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {recentSessions?.length > 0 &&
                        recentSessions.map((session) => (
                          <Tr key={session.sessionid}>
                            <Td>
                              <Link href={`/play/${session.sessionid}`}>Session #{session.sessionid}</ Link>
                              &#x2003;
                              {session.sessionStatus === 1 && (
                                <Button onClick={() => joinSession(session.sessionid)}>Join</Button>
                              )}
                            </Td>
                            <Td>{getSessionStatusLabel(session?.sessionStatus)}</Td>
                            <Td>{session.updated.toLocaleDateString()}</Td>
                          </Tr>
                        ))
                      }
                    </Tbody>
                  </Table>
                </TableContainer>
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
