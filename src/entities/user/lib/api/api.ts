import { instance } from '@/shared/lib/api/api';
import { USERS_URL } from './url/users.url';
import { PARAMS_URL } from '@/shared/lib/api/url/app.url';

export const APIUsers = {
  fetchAllUsers: ({ limit = 10 }: { limit?: number }) => {
    return instance.get(`${USERS_URL.all}${PARAMS_URL.limit}${limit}`);
  },
  fetchUserById: (id: number) => {
    return instance.get(`${USERS_URL.all}/${id}`);
  },
};
