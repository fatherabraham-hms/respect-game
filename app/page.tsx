'use client';
import {UserPill} from '@privy-io/react-auth/ui';
import Link from 'next/link';
import { Logo } from '@/components/icons';
import { NavSidebar } from '@/components/app-shell/nav-sidebar';
import { ConnectedWallet, usePrivy, useWallets } from '@privy-io/react-auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UsersTable } from '@/app/users-table';
import { getUserProfile, isLoggedInUserAdmin } from '@/app/actions';
import { AuthContext } from 'data/context/Contexts';
import { SessionList } from '@/components/sessions-list/session-list';
import { Signup } from '@/components/signup/signup';

export default function IndexPage() {
  const router = useRouter();
  const {
    ready,
    authenticated,
    user,
    connectWallet,
  } = usePrivy();
  const {wallets} = useWallets();
  const [authContext, setAuthContext] = useState({
    isLoggedIn: false,
    isAdmin: false,
    hasProfile: false
  });

  function detaultToNonCustodialWallet() {
    if (wallets && wallets.length > 0) {
      const nonCustodialWallets: ConnectedWallet[] | undefined = wallets.filter((wallet: ConnectedWallet) => !(wallet.walletClientType === 'privy'));
      if (nonCustodialWallets.length > 0) {
        connectWallet({
          suggestedAddress: nonCustodialWallets[0].address,
        });
      }
    }
  }

  function fetchBackendAuthContext() {
    if (ready && authenticated && user?.wallet && user.wallet.address) {
      isLoggedInUserAdmin().then((isAdmin) => {
        setAuthContext({
          ...authContext,
          isAdmin,
          isLoggedIn: authenticated,
        });
      });
      getUserProfile(user.wallet.address).then((profile) => {
        setAuthContext({
          ...authContext,
          hasProfile: profile !== null,
        });
      });
    }
  }

  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/login');
    }
    fetchBackendAuthContext();
  }, [ready, authenticated, router]);

  function renderContent() {
    if (ready && authenticated) {
      if (!authContext.hasProfile && authContext.isAdmin) {
        return <Signup />;
      } else if (authContext.hasProfile && authContext.isAdmin) {
        return <UsersTable />;
      } else if (authContext.hasProfile && !authContext.isAdmin) {
        return <SessionList />;
      }
    }
    return null;
  }

  return (
    <AuthContext.Provider value={{ ...authContext, setAuthContext }}>
    <main className="flex flex-1 flex-col">
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-5">
              <Link className="flex items-center gap-2 font-semibold" href="/">
                <Logo />
                <span className="">ACME</span>
              </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
              {ready && authenticated && <NavSidebar />}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header
            className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
            <Link className="flex items-center gap-2 font-semibold lg:hidden" href="/">
              <Logo />
              <span className="">ACME</span>
            </Link>
            <UserPill />
          </header>
          {renderContent()}
        </div>
      </div>
    </main>
    </AuthContext.Provider>
  );
}
