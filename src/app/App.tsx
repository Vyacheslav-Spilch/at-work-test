import './../global.css';

import { useAppDispatch } from '../store/hooks';
import { useEffect } from 'react';
import { getAllUsers } from '../store/slices/users/usersSlice';
import { Layout } from './layout/layout';

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
