import { z } from 'zod';

import { errors } from '@/constants';

export const requiredFieldValidation = z
  .string()
  .min(1, { message: errors.required })
  .trim();