'use client';
import PrivyProviderWrapper from '@/components/app-shell/privy-provider-wrapper';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { AppFrame } from '@/app/app-frame';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
};
export const theme = extendTheme({ config });

export function Providers({ children }: { children: React.ReactNode }) {

  return (
      <PrivyProviderWrapper>
          <AppFrame>{children}</AppFrame>
      </PrivyProviderWrapper>
  );
}
