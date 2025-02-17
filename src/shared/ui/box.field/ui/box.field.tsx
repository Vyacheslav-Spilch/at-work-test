import { UseFormRegister } from 'react-hook-form';
import s from './style.module.css';
import { UserFieldLabel } from '@/entities/user/types/types';
import { UserFormType } from '@/entities/user/validation/user.schema';
import { CloseIcon } from '@/shared/icons/close';
import { Input } from '../../input/ui/input';

interface BoxFieldProps {
  label: UserFieldLabel;
  register: UseFormRegister<UserFormType>;
  defaultValue: UserFormType[keyof UserFormType];
  fieldName: keyof UserFormType;
  error: boolean;
  setValue: (key: keyof UserFormType, value: UserFormType[keyof UserFormType]) => void;
}

export const BoxField = ({ label, register, defaultValue, fieldName, error, setValue }: BoxFieldProps) => {
  const onHandleClearInpit = () => {
    setValue(fieldName, '');
  };

  return (
    <div className={s.box_field}>
      <span className={s.label}>{label}</span>
      <Input error={error} defaultValue={defaultValue} {...register(fieldName)} />
      <CloseIcon className={s.clean_input} onClick={onHandleClearInpit} />
    </div>
  );
};
