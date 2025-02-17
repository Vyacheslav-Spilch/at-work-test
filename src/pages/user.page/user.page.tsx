import { useNavigate, useParams } from 'react-router-dom';
import s from './style.module.css';
import { HeaderTitle } from '@/widgets/index';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { UserSettingBox } from './user.setting.box/user.setting.box';
import { UserFormFields } from './user.form.fields/user.form.fields';
import { useEffect } from 'react';
import { getUserById } from '@/store/slices/users/usersSlice';
import { selectUserById, selectUserIsLoading } from '@/store/selectors/users/usersSelectors';
import { Routers } from '@/app/routers/app.routers';

export const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector(selectUserById(userId));
  const isLoading = useAppSelector(selectUserIsLoading);

  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [dispatch, userId]);

  if (isLoading === 'failed') {
    navigate('/404');
  }

  return (
    <div className={s.container_user_page}>
      <HeaderTitle path={Routers.MAIN} id="back" title="Назад" />
      <section className={s.container_section}>
        {user && (
          <>
            <UserSettingBox user={user} />
            <UserFormFields user={user} />
          </>
        )}
      </section>
    </div>
  );
};
