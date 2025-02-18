import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, UserReturnData } from '@/entities/user/types/types';
import { ThunkConfig } from '@/store/types';
import { APIUsers } from '@/entities/user/lib/api/api';
import { UsersSliceType } from './types';
import { createAppAsyncThunk } from '@/store/hooks';

const initialState: UsersSliceType = {
  usersActive: [],
  usersArchive: [],
  user: {} as IUser,
  isLoading: 'idle',
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    moveToArchive: ({ usersActive, usersArchive }, action: PayloadAction<{ id: number }>) => {
      const indexUser = usersActive.findIndex((user) => user.id === action.payload.id);
      if (indexUser !== -1) {
        usersArchive.push(usersActive[indexUser]);
        usersActive.splice(indexUser, 1);
      }
    },
    removeFromArchive: ({ usersActive, usersArchive }, action: PayloadAction<{ id: number }>) => {
      const indexUser = usersArchive.findIndex((user) => user.id === action.payload.id);
      if (indexUser !== -1) {
        usersActive.push(usersArchive[indexUser]);
        usersArchive.splice(indexUser, 1);
      }
    },
    deleteUser: ({ usersActive }, action: PayloadAction<{ id: number }>) => {
      const indexUser = usersActive.findIndex((user) => user.id === action.payload.id);
      if (indexUser !== -1) {
        usersActive.splice(indexUser, 1);
      }
    },
    updateUserInfo: (state, action: PayloadAction<{ user: IUser }>) => {
      state.user = action.payload.user;
    },
    fetchUser: (state, action: PayloadAction<{ id: number }>) => {
      const indexUser = state.usersActive.findIndex((user) => user.id === action.payload.id);
      if (indexUser !== -1) {
        state.user = state.usersActive[indexUser];
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = 'pending';
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        state.usersActive = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = 'failed';
        if (action.error.message) {
          state.error = action.error.message;
        } else {
          state.error = 'Произошла ошибка при загрузке пользователей';
        }
      });
  },
});

export const getAllUsers = createAppAsyncThunk<IUser[], void, ThunkConfig>(
  `${usersSlice.name}/getAllUsers`,
  async (_, thunkApi) => {
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
  }
);

export const { moveToArchive, removeFromArchive, deleteUser, updateUserInfo, fetchUser } = usersSlice.actions;
export default usersSlice.reducer;
