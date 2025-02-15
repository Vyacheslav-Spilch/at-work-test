import { IUser } from '../../../entities/user/types/types';

type IsLoadingType = 'idle' | 'pending' | 'succeeded' | 'failed';
type IsErrorType = null | string;

export type UsersSliceType = {
  users: IUser[];
  loading: IsLoadingType;
  error: IsErrorType;
};
