import { RootState } from '@/store/store';

export const selectUsersIsActive = ({ users }: RootState) => users.usersActive;

export const selectUsersIsArchive = ({ users }: RootState) => users.usersArchive;
export const selectUserIsLoading = ({ users }: RootState) => users.isLoading;

export const selectUserById =
  (id: number) =>
  ({ users }: RootState) => {
    return users.usersActive.find((user) => user.id === id);
  };
