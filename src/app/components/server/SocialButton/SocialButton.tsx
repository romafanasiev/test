import { Button, VisuallyHidden } from '@chakra-ui/react';
import Link from 'next/link';

import { ReactNode } from 'react';

export const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <Link href={href} legacyBehavior>
      <Button
        bg="blackAlpha.100"
        rounded="full"
        cursor="pointer"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        transition="background 0.3s ease"
        _hover={{
          bg: 'blackAlpha.200',
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </Button>
    </Link>
  );
};

