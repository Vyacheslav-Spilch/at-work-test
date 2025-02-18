import { Routes, Route, Navigate } from 'react-router-dom';
import { Wrapper, Header } from '@/widgets/index';
import { MainPage, UserPage, ErrorPage } from '@/pages/index';
import { useScrollToTop } from '@/shared/lib/hooks/useScrollToTop';
import { Routers } from '../routers/app.routers';
import { useAppSelector } from '@/store/hooks';
import { selectUsersIsActive } from '@/store/selectors/users/usersSelectors';

export const Layout = () => {
  useScrollToTop();

  const users = useAppSelector(selectUsersIsActive)

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path={Routers.MAIN} element={<MainPage />} />
        <Route path={`${Routers.USER}/:id`} element={<UserPage users={users}/>} />
        <Route path="*" element={<Navigate to={Routers.ERROR} />} />
        <Route path={Routers.ERROR} element={<ErrorPage />} />
      </Routes>
    </Wrapper>
  );
};
