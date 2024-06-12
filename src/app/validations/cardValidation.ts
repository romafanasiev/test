import { z } from 'zod';

import { fieldNames } from '@/constants/fieldNames';
import { errors } from '@/constants';

import { requiredFieldValidation } from './helpers';

const { title, description, content } = fieldNames;

const { minimumError, maximumError } = errors;

export const cardValidationSchema = z.object({
  [title]: requiredFieldValidation
    .min(6, { message: minimumError(6) })
    .max(32, { message: maximumError(32) }),
  [description]: requiredFieldValidation
    .min(6, { message: minimumError(6) })
    .max(32, { message: maximumError(32) }),
  [content]: requiredFieldValidation
    .min(20, { message: minimumError(20) })
    .max(300, { message: maximumError(300) }),
});

