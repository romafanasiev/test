export const errors = {
  required: 'Field is required',
  connectionErr: 'Connection problem',
  logInErr: 'The email or password is incorrect',
  emailFormat: 'Incorrect email format',
  minimumError: (minimum: number) => `Required minimum ${minimum} symbol(s)`,
  maximumError: (maximum: number) => `Maximum ${maximum} symbols`,
} as const;
