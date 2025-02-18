import './../global.css';

import { useAppDispatch } from '../store/hooks';
import { useEffect } from 'react';
import { Layout } from './layout/layout';
import { getAllUsers } from '@/store/thunks/users/usersThunks';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <Layout />
    </div>
  );
}

export default App;
