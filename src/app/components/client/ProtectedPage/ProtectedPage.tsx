'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useMainStore } from '@/app/providers/store-provider';
import { routes } from '@/constants';

import type { ReactNode } from 'react';
import { CircularProgress } from '@chakra-ui/react';

const { login } = routes.auth;

export const ProtectedPage = ({ children }: { children: ReactNode }) => {
  const { user } = useMainStore((state) => state);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user && pathname !== login) {
      router.replace(login);
    }
  }, [user, pathname]);

  return user ? (
    <>{children}</>
  ) : (
    <CircularProgress isIndeterminate margin="auto" />
  );
};

