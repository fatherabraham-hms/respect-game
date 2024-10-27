'use client';
import { useState, useEffect, Suspense } from 'react';
import { getRecentSessionsForUserWalletAddressAction } from '@/app/actions';
import { SESSION_POLLING_INTERVAL } from '../../data/constants/app_constants';
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { getSessionStatusLabel } from '@/lib/utils';
import * as React from 'react';

export function SessionList() {
  const [recentSessions, setRecentSessions] = useState<
    {
      sessionid: number;
      sessionStatus: number | null;
      updated: Date;
    }[]
  >([]);

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

  return (
      <TableContainer>
      <Table colorScheme="gray" size="sm">
        {/*<Thead>*/}
        {/*  <Tr>*/}
        {/*    <Th>Session Number</Th>*/}
        {/*    <Th>Status</Th>*/}
        {/*    <Th>Created</Th>*/}
        {/*  </Tr>*/}
        {/*</Thead>*/}
        <Tbody>
          {recentSessions?.length > 0 &&
            recentSessions.map((session) => (
              <Tr key={session.sessionid}>
                <Td>
                  <Link href={`/play/${session.sessionid}`}>
                    Session #{session.sessionid}
                  </Link>
                  &#x2003;
                  {session.sessionStatus === 1 && (
                    <Link color="blue" href={`/play/${session.sessionid}`}>
                      Join
                    </Link>
                  )}
                </Td>
                <Td>{getSessionStatusLabel(session?.sessionStatus)}</Td>
                <Td>{session.updated.toLocaleDateString()}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
