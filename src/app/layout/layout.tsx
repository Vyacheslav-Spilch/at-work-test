import { Routes, Route, Navigate } from 'react-router-dom';
import { Wrapper } from '../../widgets/wrapper/wrapper';
import { MainPage } from '../../pages/main.page/main.page';
import { Routers } from './../routes';
import { UserPage } from '../../pages/user.page/user.page';
import { Header } from '../../widgets/header/header';
import { useScrollToTop } from '../../shared/lib/hooks/usescroll.to.top';
import { ErrorPage } from '../../pages/error.page/error.page';

export const Layout = () => {
  useScrollToTop();

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path={Routers.main} element={<MainPage />} />
        <Route path={`${Routers.user}/:id`} element={<UserPage />} />
        <Route path="*" element={<Navigate to={'/404'} />} />
        <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </Wrapper>
  );
};
