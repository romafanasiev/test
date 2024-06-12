'use server';

import { redirect } from 'next/navigation';
import { routes } from '@/constants';

import type { LoginFormType } from '../types';

export const login = async ({ email, password }: LoginFormType) => {
  console.log(email, password);

  await new Promise((res) => setTimeout(res, 3000));

  redirect(routes.main.home);
};

