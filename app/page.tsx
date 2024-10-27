'use client';
import { UserPill } from '@privy-io/react-auth/ui';
import { Link } from '@chakra-ui/next-js';
import { Logo } from '@/components/icons';
import { NavSidebar } from '@/components/app-shell/nav-sidebar';
import { usePrivy } from '@privy-io/react-auth';
import { Suspense, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UsersTable } from '@/app/users-table';
import { getUserProfile, isLoggedInUserAdmin } from '@/app/actions';
import { AuthContext } from 'data/context/Contexts';
import { SessionList } from '@/components/sessions-list/session-list';
import { Signup } from '@/components/signup/signup';
import Cookies from 'js-cookie';
import { Box, chakra, Container, Divider, Flex, Spinner } from '@chakra-ui/react';
import * as React from 'react';

export default function IndexPage() {
  const router = useRouter();
  const { ready, authenticated, user } = usePrivy();
  const [authContext, setAuthContext] = useState({
    isLoggedIn: false,
    isAdmin: false,
    hasProfile: false
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/login');
    }
    if (
      ready &&
      authenticated &&
      user?.wallet?.address &&
      user.wallet.address.length > 8
    ) {
      Cookies.set('activeWalletAddress', user?.wallet?.address, { expires: 1 });
      fetchBackendAuthContext();
    }
  }, [ready, authenticated, router]);

  function fetchBackendAuthContext() {
    if (ready && authenticated && user?.wallet && user.wallet.address) {
      Promise.all([
        isLoggedInUserAdmin(),
        getUserProfile(user.wallet.address)
      ]).then(([isAdmin, profile]) => {
        setAuthContext({
          isAdmin,
          isLoggedIn: authenticated,
          hasProfile: profile?.name !== '' && profile?.username !== ''
        });
        setLoading(false);
      });
    }
  }

  function renderContent() {
    if (loading) {
        return <Spinner m={10}/>;
    } else if (ready && authenticated && !loading) {
      if (!authContext.hasProfile) {
        return <Signup />;
      } else if (authContext.hasProfile && authContext.isAdmin) {
        return <UsersTable />;
      } else if (authContext.hasProfile && !authContext.isAdmin) {
        return <SessionList />;
      }
    }
    return null;
  }

  function shouldRender() {
    return (
      ready &&
      authenticated &&
      user?.wallet?.address &&
      user.wallet.address.length > 8
    );
  }

  return (
    shouldRender() && (
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
              <Container maxW="6xl" py={10} px={4}>
                <Box
                  border="1px solid"
                  borderColor="gray.100"
                  padding={5}
                  rounded="md"
                  boxShadow="lg"
                  overflow="hidden"
                >
                  <Flex justifyContent="left" p={5}>
                    <chakra.h3
                      fontSize="xl"
                      fontWeight="bold"
                      textAlign="center"
                      color="gray.600"
                    >

                    </chakra.h3>
                  </Flex>
                  <Divider />
                  <Suspense fallback={<Spinner m={10}/>}>
                    {renderContent()}
                  </Suspense>
                </Box>
              </Container>
            </div>
          </div>
        </main>
      </AuthContext.Provider>
    )
  );
}
