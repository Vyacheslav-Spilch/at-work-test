import { IUser } from '../../../entities/user/types/types';

type IsLoadingType = 'idle' | 'pending' | 'succeeded' | 'failed';
type IsErrorType = string | null;

export type UsersSliceType = {
  usersActive: IUser[];
  usersArchive: IUser[];
  isLoading: IsLoadingType;
  error: IsErrorType;
};
