import { z } from 'zod';

export const userFormSchema = z.object({
  name: z.string().min(1, { message: 'Поле не должно быть пустым' }),
  username: z.string().min(1, { message: 'Поле не должно быть пустым' }),
  email: z.string().email({ message: 'Некорректный формат почты' }),
  city: z.string().min(1, { message: 'Поле не должно быть пустым' }),
  phone: z.string().min(1, { message: 'Поле не должно быть пустым' }),
  company: z.string().min(1, { message: 'Поле не должно быть пустым' }),
});

export type UserFormType = z.infer<typeof userFormSchema>;
