import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/entities/user/types/types';
import { UsersSliceType } from './types';
import { getAllUsers } from '@/store/thunks/users/usersThunks';

const initialState: UsersSliceType = {
  usersActive: [],
  usersArchive: [],
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
    updateUserInfo: ({ usersActive }, action: PayloadAction<{ user: IUser }>) => {
      const indexUser = usersActive.findIndex((user) => user.id === action.payload.user.id);
      if (indexUser !== -1) {
        usersActive[indexUser] = action.payload.user;
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

export const { moveToArchive, removeFromArchive, deleteUser, updateUserInfo } = usersSlice.actions;
export default usersSlice.reducer;
