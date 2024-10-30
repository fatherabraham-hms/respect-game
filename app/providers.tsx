'use client';
import PrivyProviderWrapper from '@/components/app-shell/privy-provider-wrapper';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { AppFrame } from '@/app/app-frame';
import { usePrivy } from '@privy-io/react-auth';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { getUserProfile, isLoggedInUserAdmin } from '@/app/actions';
import { useRouter } from 'next/navigation';
import { AuthContext, AuthContextType } from '../data/context/Contexts';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
};
export const theme = extendTheme({ config });

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { ready, authenticated, user } = usePrivy();
  const [authContext, setAuthContext] = useState<AuthContextType>({
    isInit: true,
    isAdmin: false,
    isLoggedIn: false,
    hasProfile: false
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
          isInit: false,
          isAdmin,
          isLoggedIn: authenticated,
          hasProfile: profile?.name !== '' && profile?.username !== '',
        });
        setLoading(false);
      });
    }
  }
  return (
    <ChakraProvider theme={theme}>
      <PrivyProviderWrapper>
        <AuthContext.Provider value={authContext}>
          <AppFrame>{children}</AppFrame>
        </AuthContext.Provider>
      </PrivyProviderWrapper>
    </ChakraProvider>
  );
}
