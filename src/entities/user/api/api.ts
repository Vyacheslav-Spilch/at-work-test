import { instance } from '../../../shared/lib/api/api';

export const apiUsers = {
  getUsers: () => {
    return instance.get('/users?_limit=6');
  },
};
