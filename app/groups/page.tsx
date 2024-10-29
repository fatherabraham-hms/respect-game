'use client';
import { UsersTable } from '@/app/users-table';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../../data/context/Contexts';

export default async function IndexPage() {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!authContext.isLoggedIn) {
      router.push('/login');
    }
    if (!authContext.isAdmin) {
      router.push('/play');
    }
  }, []);
  return (
    authContext.isAdmin && <UsersTable />
  );
}
