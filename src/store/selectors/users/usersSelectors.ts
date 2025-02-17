import { RootState } from '@/store/store';
import { createSelector } from 'reselect';

export const selectUsersIsActive = createSelector([({ users }: RootState) => users.userList], (users) =>
  users.filter((user) => !user.isArchive)
);

export const selectUsersIsArchive = createSelector([({ users }: RootState) => users.userList], (users) =>
  users.filter((user) => user.isArchive)
);
export const selectUserIsLoading = ({ users }: RootState) => users.isLoading;

export const selectUserById =
  (id: number) =>
  ({ users }: RootState) =>
    users.userList.find((user) => user.id === id);
