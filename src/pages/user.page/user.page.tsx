import { useNavigate, useParams } from 'react-router-dom';
import s from './style.module.css';
import { HeaderTitle } from '../../widgets/header.title/header.title';
import { useAppSelector } from '../../store/hooks';
import * as usersSelectors from '../../store/slices/users/selectors.users';
import { UserSettingBox } from './user.setting.box/user.setting.box';
import { UserFormFields } from './user.form.fields/user.form.fields';

export const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const navigate = useNavigate();

  const user = useAppSelector(usersSelectors.selectById(userId));

  // useEffect(() => {
  //     console.log(userId);

  //     debugger
  //     if(!user) {
  //         debugger
  //         navigate("/404", { replace: true })
  //     }
  // }, [user])

  if (!user) {
    navigate('/404', { replace: true });
  }

  return (
    <div className={s.container_user_page}>
      <HeaderTitle path="/" id="back" title="Назад" />
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
