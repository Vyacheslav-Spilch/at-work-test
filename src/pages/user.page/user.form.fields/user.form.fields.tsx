import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, FeedBack, Title } from './../../../shared/ui/index';
import s from './style.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  userFieldList,
  userFieldsSchema,
  UserFormType,
} from './validation/validation';
import { useAppDispatch } from '../../../store/hooks';
import { BoxField } from '../../../shared/ui/box.field/box.field';
import { CheckForSpaces } from '../../../shared/lib/utils/check.for.spaces';
import { Spinner } from './../../../shared/icons/spinner';
import { updateUserInfo } from '../../../store/slices/users/usersSlice';
import { IUser } from './../../../entities/user/types/types';

export const UserFormFields = ({ user }: { user: IUser }) => {
  const dispatch = useAppDispatch();

  const [activeFeedBack, setActiveFeedBack] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<UserFormType>({
    resolver: zodResolver(userFieldsSchema),
  });

  useEffect(() => {
    if (activeFeedBack) {
      const timer = setTimeout(() => {
        if (activeFeedBack) {
          setActiveFeedBack((prev) => !prev);
        }
      }, 4000);
      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    }
  }, [activeFeedBack]);

  const closeToFeedBack = () => {
    setActiveFeedBack(false);
  };

  const onHandleSubmitUserData = (data: UserFormType) => {
    if (CheckForSpaces(data) && user) {
      dispatch(
        updateUserInfo({
          user: { ...data, id: user.id, archive: user.archive },
        }),
      );
      setActiveFeedBack(true);
    }
  };

  console.log(user);

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
              {errors[field.value] && (
                <span className={s.error_message}>
                  {errors[field.value]?.message}
                </span>
              )}
            </div>
          ))
        ) : (
          <Spinner />
        )}
        <Button type="submit" text="Сохранить" />
      </form>
      {activeFeedBack && (
        <div className={s.wrapper_feedback}>
          <FeedBack onClick={closeToFeedBack} />
        </div>
      )}
    </section>
  );
};
