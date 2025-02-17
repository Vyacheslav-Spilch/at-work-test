import { instance } from '@/shared/lib/api/api';
import { USERS_PATHS } from './paths/users.paths';
import { PARAMS_PATH } from '@/shared/lib/api/paths/app.paths';

export const APIUsers = {
  fetchAllUsers: ({ limit }: { limit?: number }) => {
    return instance.get(`${USERS_PATHS.all}${PARAMS_PATH.limit}${limit}`);
  },
  fetchUserById: (id: number) => {
    return instance.get(`${USERS_PATHS.all}/${id}`);
  },
};
