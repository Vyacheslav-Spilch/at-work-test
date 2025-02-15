import { z } from 'zod';

export const userFieldsSchema = z.object({
  name: z.string().min(1, { message: 'Поле не должно быть пустым' }),
  username: z.string().min(1, { message: 'Поле не должно быть пустым' }),
  email: z.string().email({ message: 'Некорректный формат почты' }),
  city: z.string().min(1, { message: 'Поле не должно быть пустым' }),
  phone: z.string().min(1, { message: 'Поле не должно быть пустым' }),
  company: z.string().min(1, { message: 'Поле не должно быть пустым' }),
});

export type UserFormType = z.infer<typeof userFieldsSchema>;

export type IUserFieldList = UserField[];

export type FieldsKey = keyof UserFormType;
export type FieldLabel =
  | 'Имя'
  | 'Никнейм'
  | 'Почта'
  | 'Город'
  | 'Телефон'
  | 'Название компании';
type UserField = {
  label: FieldLabel;
  value: FieldsKey;
};

export const userFieldList: IUserFieldList = [
  {
    label: 'Имя',
    value: 'name',
  },
  {
    label: 'Никнейм',
    value: 'username',
  },
  {
    label: 'Почта',
    value: 'email',
  },
  {
    label: 'Город',
    value: 'city',
  },
  {
    label: 'Телефон',
    value: 'phone',
  },
  {
    label: 'Название компании',
    value: 'company',
  },
];
