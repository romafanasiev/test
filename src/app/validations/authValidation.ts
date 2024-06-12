import { z } from 'zod';

import { fieldNames } from '@/constants/fieldNames';
import { errors } from '@/constants';

import { requiredFieldValidation } from './helpers';

const { email, password } = fieldNames;

export const loginValidationSchema = z.object({
  [email]: requiredFieldValidation.email({ message: errors.emailFormat }),
  [password]: requiredFieldValidation,
});

