import { z } from 'zod';
import { cardValidationSchema, loginValidationSchema } from '../validations';

export type LoginFormType = z.infer<typeof loginValidationSchema>;

export type CardFormType = z.infer<typeof cardValidationSchema>;

