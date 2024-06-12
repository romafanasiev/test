'use client';
import { IconButton } from '@chakra-ui/react';
import { PiSignOut } from 'react-icons/pi';
import { useMainStore } from '@/app/providers/store-provider';

export const SignOut = () => {
  const { user, removeUserData } = useMainStore((state) => state);

  return user ? (
    <IconButton
      aria-label="sign out"
      onClick={() => void removeUserData()}
      icon={<PiSignOut />}
    >
      SignOut
    </IconButton>
  ) : null;
};

