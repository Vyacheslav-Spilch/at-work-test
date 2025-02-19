import { useNavigate, useParams } from 'react-router-dom';
import s from './style.module.css';
import { HeaderTitle } from '@/widgets/index';
import { useAppSelector } from '@/store/hooks';
import { UserSettingBox, UserFormFields } from '@/entities/user/ui/index';
import { selectUserById, selectUserIsLoading } from '@/store/selectors/users/usersSelectors';
import { Routers } from '@/app/routers/app.routers';
import { Spinner } from '@/assets/icons';
import { useEffect } from 'react';

export const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const navigate = useNavigate();
  const isLoading = useAppSelector(selectUserIsLoading);
  const user = useAppSelector(selectUserById(userId));

  useEffect(() => {
    if ((isLoading === 'succeeded' && !user) || isLoading === 'failed') {
      navigate(`${Routers.ERROR}`, { replace: true });
    }
  }, [isLoading, user]);

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
