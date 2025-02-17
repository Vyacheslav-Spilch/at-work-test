import { UserField } from '../types/types';

export const userSettingList = ['Данные профиля', 'Рабочее пространство', 'Приватность', 'Безопасность'] as const;

export const userFieldList: UserField[] = [
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
