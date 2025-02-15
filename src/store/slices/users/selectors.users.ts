import { RootState } from '../../store';

export const selectUsersActive = ({ users }: RootState) =>
  users.users.filter((user) => !user.archive);
export const selectUsersArchive = ({ users }: RootState) =>
  users.users.filter((user) => user.archive);

export const selectIsLoading = ({ users }: RootState) => users.loading;

export const selectById =
  (id: number) =>
  ({ users }: RootState) =>
    users.users.find((user) => user.id === id);
