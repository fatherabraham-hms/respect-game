'use client';
import {
  Box,
  ChakraProvider,
  Container,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { Logo } from '@/components/icons';
import { NavSidebar } from '@/components/app-shell/nav-sidebar';
import { UserPill } from '@privy-io/react-auth/ui';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { usePrivy } from '@privy-io/react-auth';
import { AuthContext, AuthContextType } from '../data/context/Contexts';
import { getUserProfile, isLoggedInUserAdmin } from '@/app/actions';
import Cookies from 'js-cookie';
import { HATS_CONTRACT, OP_MAIN_RPC } from '../data/constants/app_constants';
import { HatsClient } from "@hatsprotocol/sdk-v1-core";
import { createPublicClient, http, PublicClient,  } from 'viem';
import { optimism } from 'viem/chains';

export function AppFrame({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { ready, authenticated, user } = usePrivy();
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [authContext, setAuthContext] = useState<AuthContextType>({
    isFirstAuthContextInit: true,
    isAdmin: false,
    isLoggedIn: false,
    hasProfile: false,
    hasHat: false
  });
  const [isWearer, setIsWearer] = useState<boolean | null>(null);
  const hatId = BigInt(HATS_CONTRACT);
  const publicClient = createPublicClient({
    chain: optimism,
    transport: http(OP_MAIN_RPC),
  }) as PublicClient;

  const hatsClient = new HatsClient({
    chainId: 10,
    publicClient: publicClient,
  });

  useEffect(() => {
    setIsMounted(true);
    if (ready && authenticated && authContext?.isFirstAuthContextInit && user && user?.wallet?.address) {
      Cookies.set('activeWalletAddress', user.wallet.address, { expires: 1 });
      fetchBackendAuthContext().then();
    }

    if (ready && !authenticated) {
      router.push('/login');
    }
    if (authContext?.isLoggedIn && authContext?.hasProfile) {
      setLoading(false);
    }
  }, [ready, authenticated, router, authContext]);

  if (!isMounted) {
    return null;
  }

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
          isFirstAuthContextInit: false,
          isAdmin,
          isLoggedIn: authenticated,
          hasProfile: profile?.name !== '' && profile?.username !== '',
          hasHat: isHatWearer
        });
      } catch (error) {
        console.error("Error fetching auth context:", error);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <ChakraProvider>
      <AuthContext.Provider value={authContext}>
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
                {/*<Flex justifyContent="left" p={5}>*/}
                {/*  <chakra.h3*/}
                {/*    fontSize="xl"*/}
                {/*    fontWeight="bold"*/}
                {/*    textAlign="center"*/}
                {/*    color="gray.600"*/}
                {/*  >*/}

                {/*  </chakra.h3>*/}
                {/*</Flex>*/}
                  {children}
              </Box>
            </Container>
          </div>
        </div>
      </main>
      </AuthContext.Provider>
    </ChakraProvider>
  );
}
