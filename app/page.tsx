'use client';
import { UserPill } from '@privy-io/react-auth/ui';
import Link from 'next/link';
import { Logo } from '@/components/icons';
import { NavSidebar } from '@/components/app-shell/nav-sidebar';
import { usePrivy } from '@privy-io/react-auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UsersTable } from './users-table';
import { getUserProfile, isLoggedInUserAdmin } from '@/app/actions';
import { AuthContext } from 'data/context/Contexts';
import { SessionList } from '@/components/sessions-list/session-list';
import { Signup } from '@/components/signup/signup';
import Cookies from 'js-cookie';
import { HatsClient } from "@hatsprotocol/sdk-v1-core";
import { createPublicClient, http, PublicClient,  } from 'viem'; 
import { optimism } from 'viem/chains'; 


export default function IndexPage() {
  const router = useRouter();
  const { ready, authenticated, user } = usePrivy();
  const [authContext, setAuthContext] = useState({
    isLoggedIn: false,
    isAdmin: false,
    hasProfile: false,
    hasHat: false,
  });
  const [loading, setLoading] = useState(true);
  const [isWearer, setIsWearer] = useState<boolean | null>(null);
  const hatId = BigInt('0x000000af00010001000200000000000000000000000000000000000000000000');
  // Setup the public client for Hats Protocol
  const publicClient = createPublicClient({
    chain: optimism,
    transport: http('https://opt-mainnet.g.alchemy.com/v2/rl6LeNsMH14k3Wdb2qWo2uiVw-haHgKz'),
  }) as PublicClient;

  const hatsClient = new HatsClient({
    chainId: 10,
    publicClient: publicClient, 
  });

  

  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/login');
    }
    if (ready && authenticated && user?.wallet?.address && user.wallet.address.length > 8) {
      Cookies.set('activeWalletAddress', user?.wallet?.address, { expires: 1 });
      fetchBackendAuthContext();
    }
  }, [ready, authenticated, router]);

  async function fetchBackendAuthContext() {
    if (ready && authenticated && user?.wallet && user.wallet.address) {
      try {
        const [isAdmin, profile, isHatWearer] = await Promise.all([
          isLoggedInUserAdmin(),
          getUserProfile(user.wallet.address),
          hatsClient.isWearerOfHat({
            wearer: user.wallet.address as `0x${string}`, // Type assertion
            hatId,
          }),
        ]);

        setAuthContext({
          isAdmin,
          isLoggedIn: authenticated,
          hasProfile: profile?.name !== '' && profile?.username !== '',
          hasHat: isHatWearer,
        });
      } catch (error) {
        console.error("Error fetching auth context:", error);
      } finally {
        setLoading(false);
      }
    }
  }

  function renderContent() {
    if (loading) {
      return <div>Loading...</div>;
    }
    if (ready && authenticated) {
      if (!authContext.hasProfile) {
        return <Signup />;
      } else if (authContext.hasProfile && authContext.hasHat) {
        return <UsersTable />;
      } else if (authContext.hasProfile && !authContext.hasHat) {
        return <SessionList />;
      }
    }
    return null;
  }

  function shouldRender() {
    return ready && authenticated && user?.wallet?.address && user.wallet.address.length > 8;
  }

  return ( shouldRender() &&
    <AuthContext.Provider value={{ ...authContext, setAuthContext }}>
      <main className="flex flex-1 flex-col">
        <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
          <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
              <div className="flex h-[60px] items-center border-b px-5">
                <Link
                  className="flex items-center gap-2 font-semibold"
                  href="/"
                >
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
            <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 justify-between lg:justify-end">
              <Link
                className="flex items-center gap-2 font-semibold lg:hidden"
                href="/"
              >
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
