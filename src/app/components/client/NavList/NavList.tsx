'use client';
import { routes } from '@/constants';
import { Stack } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { main } = routes;

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

const mainRoutesItems = Object.entries(main) as Entries<typeof main>;

export const NavList = () => {
  const pathname = usePathname();

  return (
    <Stack direction="row" spacing={6} as="nav">
      {mainRoutesItems.map(([name, path]) => (
        <Link
          href={path}
          className={`hover:underline capitalize ${
            pathname === path && 'underline'
          }`}
          key={path}
        >
          {name}
        </Link>
      ))}
    </Stack>
  );
};

