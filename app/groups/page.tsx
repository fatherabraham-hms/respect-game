'use client';
import { UsersTable } from '@/app/users-table';
import { Suspense, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../../data/context/Contexts';
import { usePrivy } from '@privy-io/react-auth';
import { Spinner } from '@chakra-ui/react';
import * as React from 'react';

export default function IndexPage() {
  const {ready, authenticated} = usePrivy();
  const authContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (ready && !authenticated || (ready && authenticated && !authContext.isLoggedIn)) {
      router.push('/login');
    }
    if (ready && authenticated && !authContext.isAdmin) {
      router.push('/play');
    }
  }, []);

  return (
    <Suspense fallback={<Spinner m={10} />}>
      <UsersTable />
    </Suspense>
  );
}
