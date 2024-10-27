'use client';
import PrivyProviderWrapper from '@/components/app-shell/privy-provider-wrapper';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
export const theme = extendTheme({ config });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <ChakraProvider theme={theme}>
        <PrivyProviderWrapper>{children}</PrivyProviderWrapper>
      </ChakraProvider>
  );
}
