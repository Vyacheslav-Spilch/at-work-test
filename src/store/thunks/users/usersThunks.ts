import { APIUsers } from '@/entities/user/lib/api/api';
import { IUser, UserReturnData } from '@/entities/user/types/types';
import { createAppAsyncThunk } from '@/store/hooks';
import { ThunkConfig } from '@/store/types';

export const getAllUsers = createAppAsyncThunk<IUser[], void, ThunkConfig>('users/getAllUsers', async (_, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const res = await APIUsers.fetchAllUsers({ limit: 6 });
    if (res) {
      return res.data.map((user: UserReturnData) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        company: user.company.name,
        city: user.address.city,
        isArchive: false,
      }));
    } else {
      throw Error('error');
    }
  } catch (err) {
    return rejectWithValue(`Пользователь не найден: ${err}`);
  }
});
