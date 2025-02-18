import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, FeedBack, Title } from '@/shared/ui/index';
import s from './style.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch } from '@/store/hooks';
import { BoxField } from '@/shared/ui/index';
import { CheckForSpaces } from '@/shared/lib/utils/check.for.spaces';
import { Spinner } from '@/shared/icons/spinner';
import { updateUserInfo } from '@/store/slices/users/usersSlice';
import { userFormSchema, UserFormType } from '@/entities/user/validation/user.schema';
import { userFieldList } from '@/entities/user/constants/constants';
import { IUser } from '@/entities/user/types/types';

export const UserFormFields = ({ user }: { user: IUser }) => {
  const dispatch = useAppDispatch();

  const [isActiveFeedBack, setIsActiveFeedBack] = useState(false);

  console.log(user);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserFormType>({
    resolver: zodResolver(userFormSchema),
  });

  useEffect(() => {
    if (isActiveFeedBack) {
      const timer = setTimeout(() => {
        if (isActiveFeedBack) {
          setIsActiveFeedBack((prev) => !prev);
        }
      }, 4000);
      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    }
  }, [isActiveFeedBack]);

  const closeToFeedBack = () => {
    setIsActiveFeedBack(false);
  };

  const onHandleSubmitUserData = (data: UserFormType) => {
    if (CheckForSpaces(data)) {
      dispatch(
        updateUserInfo({
          user: { ...data, id: user.id },
        })
      );
      setIsActiveFeedBack(true);
    }
  };

  return (
    <section className={s.container_form}>
      <Title text="Данные профиля" />
      <form className={s.form} onSubmit={handleSubmit(onHandleSubmitUserData)}>
        {user ? (
          userFieldList.map((field) => (
            <div className={s.wrapper} key={field.value}>
              <BoxField
                label={field.label}
                register={register}
                defaultValue={user[field.value]}
                fieldName={field.value}
                error={!!errors[field.value]}
                setValue={setValue}
              />
              {errors[field.value] && <span className={s.error_message}>{errors[field.value]?.message}</span>}
            </div>
          ))
        ) : (
          <Spinner />
        )}
        <Button type="submit" text="Сохранить" />
      </form>
      {isActiveFeedBack && (
        <div className={s.wrapper_feedback}>
          <FeedBack onClick={closeToFeedBack} />
        </div>
      )}
    </section>
  );
};
