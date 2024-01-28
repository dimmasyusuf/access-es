import * as z from 'zod';

export const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Email harus berupa email yang valid.',
  }),
  password: z
    .string()
    .min(8, {
      message: 'Password harus 8 karakter atau lebih.',
    })
    .max(72, {
      message: 'Password harus kurang dari 72 karakter.',
    }),
});
