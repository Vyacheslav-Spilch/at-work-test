import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useSelectorUserId = (id: number) =>
  useAppSelector((state) => state.users.users.find((user) => user.id === id));
