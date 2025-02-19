import { Routes, Route, Navigate } from 'react-router-dom';
import { Wrapper, Header } from '@/widgets/index';
import { MainPage, UserPage, ErrorPage } from '@/pages/index';
import { useScrollToTop } from '@/shared/lib/hooks/useScrollToTop';
import { Dynamic_Param, Routers } from '../routers/app.routers';

export const Layout = () => {
  useScrollToTop();

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path={Routers.MAIN} element={<MainPage />} />
        <Route path={`${Routers.USER}/${Dynamic_Param.id}`} element={<UserPage />} />
        <Route path="*" element={<Navigate to={Routers.ERROR} />} />
        <Route path={Routers.ERROR} element={<ErrorPage />} />
      </Routes>
    </Wrapper>
  );
};
