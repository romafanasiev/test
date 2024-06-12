'use client';

import { useRouter } from 'next/navigation';

import { routes } from '@/constants';
import { cardValidationSchema } from '@/app/validations';
import { useMainStore } from '@/app/providers/store-provider';

import { AuthForm } from '../../base';

import type { CardFormType } from '@/app/types';

export const CardForm = () => {
  const { addCard } = useMainStore((state) => state);
  const router = useRouter();

  const handleSubmit = async (data: CardFormType) => {
    await new Promise((res) => setTimeout(res, 5000));
    addCard(data);
    router.push(routes.main.home);
  };

  return (
    <AuthForm
      formTitle="Add new card"
      validationSchema={cardValidationSchema}
      action={handleSubmit}
    />
  );
};

