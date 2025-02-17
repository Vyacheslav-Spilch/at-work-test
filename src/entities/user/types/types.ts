export type UserReturnData<T = Record<string, string>> = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: T;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type IUser = Omit<UserReturnData, 'address' | 'website' | 'company'> & {
  isArchive: boolean;
  company: string;
  city: string;
};

export type UserFieldLabel = 'Имя' | 'Никнейм' | 'Почта' | 'Город' | 'Телефон' | 'Название компании';

export type UserFieldsKey = keyof Omit<IUser, 'id' | 'isArchive'>;

export type UserField = {
  label: UserFieldLabel;
  value: UserFieldsKey;
};
