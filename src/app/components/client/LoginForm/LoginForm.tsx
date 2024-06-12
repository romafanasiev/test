'use client';

import { useRouter } from 'next/navigation';

import { routes } from '@/constants';
import { loginValidationSchema } from '@/app/validations';
import { useMainStore } from '@/app/providers/store-provider';

import { AuthForm } from '../../base';

import type { LoginFormType } from '@/app/types';

export const LoginForm = () => {
  const { setUserData } = useMainStore((state) => state);
  const router = useRouter();

  const handleSubmit = async (data: LoginFormType) => {
    await new Promise((res) => setTimeout(res, 3000));
    setUserData(data.email);
    router.push(routes.main.home);
  };

  return (
    <AuthForm
      formTitle="Login"
      validationSchema={loginValidationSchema}
      action={handleSubmit}
    />
  );
};



