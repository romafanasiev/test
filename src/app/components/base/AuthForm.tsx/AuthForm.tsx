'use client';

import { useForm } from 'react-hook-form';
import { z, ZodObject } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Heading, VStack } from '@chakra-ui/react';
import { InputControl } from 'react-hook-form-chakra';

import type {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
} from 'react-hook-form';
import type { ZodType } from 'zod';

export const AuthForm = <T extends FieldValues>({
  defaultValues,
  validationSchema,
  formTitle,
  buttonText = 'submit',
  action,
}: {
  defaultValues?: DefaultValues<T>;
  validationSchema: ZodType<T>;
  formTitle: string;
  buttonText?: string;
  action: SubmitHandler<T>;
}) => {
  const {
    formState: { isValid, isSubmitting },
    control,
    handleSubmit,
  } = useForm<z.infer<typeof validationSchema>>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(action)}
      align="start"
      justify="center"
      spacing={5}
      margin="auto"
      minWidth="xs"
    >
      {formTitle && <Heading marginY={5}>{formTitle}</Heading>}

      {validationSchema instanceof ZodObject &&
        Object.keys(validationSchema.shape).map((name) => (
          <InputControl
            control={control}
            name={name as Path<T>}
            key={name}
            label={name}
            inputProps={{
              type: name === 'email' || name === 'password' ? name : 'text',
            }}
          />
        ))}

      <Button
        type="submit"
        disabled={!isValid || isSubmitting}
        isLoading={isSubmitting}
        width="full"
      >
        {buttonText}
      </Button>
    </VStack>
  );
};

