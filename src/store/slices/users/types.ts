import { IUser } from '../../../entities/user/types/types';

type IsLoadingType = 'idle' | 'pending' | 'succeeded' | 'failed';
type IsErrorType = null | string;

export type UsersSliceType = {
  usersActive: IUser[];
  usersArchive: IUser[];
  user: IUser;
  isLoading: IsLoadingType;
  error: IsErrorType;
};
