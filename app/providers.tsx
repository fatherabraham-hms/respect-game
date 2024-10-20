'use client';
import PrivyProviderWrapper from '@/components/app-shell/privy-provider-wrapper';
import { ChakraProvider } from '@chakra-ui/react';


export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <ChakraProvider>
        <PrivyProviderWrapper>{children}</PrivyProviderWrapper>
      </ChakraProvider>
  );
}
