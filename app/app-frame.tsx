'use client';
import {
  Box,
  chakra,
  ChakraProvider,
  Container,
  Divider,
  Flex
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';
import { Logo } from '@/components/icons';
import { NavSidebar } from '@/components/app-shell/nav-sidebar';
import { UserPill } from '@privy-io/react-auth/ui';
import { useContext, useEffect, useState } from 'react';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { usePrivy } from '@privy-io/react-auth';
import { AuthContext, AuthContextType } from '../data/context/Contexts';
export function AppFrame({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { ready, authenticated, user } = usePrivy();
  const { isInit, isLoggedIn, isAdmin, hasProfile } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (ready && !authenticated) {
      router.push('/login');
    }
    if (isLoggedIn && hasProfile) {
      setLoading(false);
    }
  }, [ready, authenticated, router, isInit, isLoggedIn, isAdmin, hasProfile]);

  if (!isMounted) {
    return null;
  }

  return (
    <ChakraProvider>
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
                  {children}
              </Box>
            </Container>
          </div>
        </div>
      </main>
    </ChakraProvider>
  );
}
