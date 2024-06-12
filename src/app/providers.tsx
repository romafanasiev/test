'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { StoreProvider } from './providers/store-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <StoreProvider>{children}</StoreProvider>
    </ChakraProvider>
  );
}

