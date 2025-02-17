import { instance } from '@/shared/lib/api/api';

export const APIUsers = {
  fetchAllUsers: () => {
    return instance.get('/users?_limit=6');
  },
  fetchUserById: (id: number) => {
    return instance.get(`/users/${id}`);
  },
};
