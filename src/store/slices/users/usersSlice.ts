import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, UserReturnData } from '@/entities/user/types/types';
import { ThunkConfig } from '@/store/types';
import { APIUsers } from '@/entities/user/api/api';
import { UsersSliceType } from './types';
import { createAppAsyncThunk } from '@/store/hooks';

const initialState: UsersSliceType = {
  userList: [],
  isLoading: 'idle',
  error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    moveToArchive: ({ userList }, action: PayloadAction<{ id: number }>) => {
      const indexUser = userList.findIndex((user) => user.id === action.payload.id);
      if (indexUser !== -1) {
        userList[indexUser].isArchive = true;
      }
    },
    removeFromArchive: ({ userList }, action: PayloadAction<{ id: number }>) => {
      const indexUser = userList.findIndex((user) => user.id === action.payload.id);
      if (indexUser !== -1) {
        userList[indexUser].isArchive = false;
      }
    },
    deleteUser: ({ userList }, action: PayloadAction<{ id: number }>) => {
      const indexUser = userList.findIndex((user) => user.id === action.payload.id);
      if (indexUser !== -1) {
        userList.splice(indexUser, 1);
      }
    },
    updateUserInfo: ({ userList }, action: PayloadAction<{ user: IUser }>) => {
      const indexUser = userList.findIndex((user) => user.id === action.payload.user.id);
      if (indexUser !== -1) {
        userList[indexUser] = action.payload.user;
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
        state.userList = action.payload;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = 'failed';
        if (action.error.message) {
          state.error = action.error.message;
        } else {
          state.error = 'Произошла ошибка при загрузке пользователей';
        }
      })
      .addCase(getUserById.pending, (state) => {
        state.isLoading = 'pending';
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoading = 'succeeded';
        const indexUser = state.userList.findIndex((user) => user.id === action.payload.id);
        if (indexUser !== -1) {
          state.userList[indexUser] = action.payload;
        }
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.isLoading = 'failed';
        if (action.error.message) {
          state.error = action.error.message;
        } else {
          state.error = 'Пользователь не найден';
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
          company: user.company.name,
          city: user.address.city,
          archive: false,
        }));
      } else {
        throw Error('error');
      }
    } catch (err) {
      return rejectWithValue(`Пользователь не найден: ${err}`);
    }
  }
);

export const getUserById = createAppAsyncThunk<IUser, number, ThunkConfig>(
  `${usersSlice.name}/getUserById`,
  async (id, { rejectWithValue }) => {
    try {
      const { data: user } = await APIUsers.fetchUserById(id);
      if (user) {
        return {
          ...user,
          company: user.company.name,
          archive: false,
          city: user.address.city,
        };
      } else {
        throw Error('error');
      }
    } catch (err) {
      return rejectWithValue(`Произошла ошибка: ${err}`);
    }
  }
);

export const { moveToArchive, removeFromArchive, deleteUser, updateUserInfo } = usersSlice.actions;
export default usersSlice.reducer;
