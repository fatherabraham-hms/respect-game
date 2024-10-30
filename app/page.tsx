'use client';
import { usePrivy } from '@privy-io/react-auth';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../data/context/Contexts';
import { getUserProfile, isLoggedInUserAdmin, logoutAction } from '@/app/actions';

export default function IndexPage() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const { ready, authenticated, user } = usePrivy();

  function routeToAppropriatePage() {
    if (authContext && !authContext.isInit) {
      if (authContext.isLoggedIn && !authContext.hasProfile) {
        router.push('/profile');
      } else if (authContext.hasProfile && authContext.isAdmin) {
        router.push('/groups');
      } else if (authContext.hasProfile && !authContext.isAdmin) {
        router.push('/play');
      } else {
        logoutAction();
      }
    }
  }

  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/login');
    } else if (ready && authenticated && !authContext.isInit) {
      routeToAppropriatePage();
    } else {
      router.push('/');
    }
  }, [ready, authenticated, router]);

  return (<main className="flex flex-1 flex-col"></main>);
}
