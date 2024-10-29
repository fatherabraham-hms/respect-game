'use client';
import { usePrivy } from '@privy-io/react-auth';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../data/context/Contexts';

export default function IndexPage() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const { ready, authenticated } = usePrivy();
  // const ready = true;
  // const authenticated = true;
  // const user = {
  //   wallet: {
  //     address: '0x89FC47B5Ba0cC9EbF64B489E77357E265442Bb31'
  //   }
  // };

  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/login');
    } else if (ready && authenticated) {
      if (authContext.isLoggedIn && !authContext.hasProfile) {
        router.push('/profile');
      } else if (authContext.hasProfile && authContext.isAdmin) {
        router.push('/groups');
      } else if (authContext.hasProfile && !authContext.isAdmin) {
        router.push('/play');
      }
    }
  }, [ready, authenticated, router]);

  return (<main className="flex flex-1 flex-col"></main>);
}
