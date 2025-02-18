import { useNavigate, useParams } from 'react-router-dom';
import s from './style.module.css';
import { HeaderTitle } from '@/widgets/index';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { UserSettingBox } from '../../entities/user/ui/user.setting.box/user.setting.box';
import { UserFormFields } from '../../entities/user/ui/user.form.fields/user.form.fields';
import { selectUser, selectUserIsLoading } from '@/store/selectors/users/usersSelectors';
import { Routers } from '@/app/routers/app.routers';
import { useEffect, useMemo } from 'react';
import { fetchUser } from '@/store/slices/users/usersSlice';
import { IUser } from '@/entities/user/types/types';
import { Spinner } from '@/shared/icons';

export const UserPage = ({ users }: { users: IUser[] }) => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectUserIsLoading);
  const user = useAppSelector(selectUser);

  const memoUsers = useMemo(() => users, [users]);

  useEffect(() => {
    if (memoUsers) {
      dispatch(fetchUser({ id: userId }));
    }
  }, [dispatch, userId, memoUsers]);

  if (isLoading === 'failed') {
    navigate(`${Routers.ERROR}`);
  }

  return (
    <div className={s.container_user_page}>
      <HeaderTitle path={Routers.MAIN} id="back" title="Назад" />
      <section className={s.container_section}>
        {isLoading === 'pending' && <Spinner />}
        {user && isLoading === 'succeeded' && (
          <>
            <UserSettingBox user={user} />
            <UserFormFields user={user} />
          </>
        )}
      </section>
    </div>
  );
};
