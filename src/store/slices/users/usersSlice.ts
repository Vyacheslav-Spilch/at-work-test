import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  IUser, UserReturnData } from "../../../entities/user/types/types";
import { ThunkConfig } from "../../types";
import { apiUsers } from "../../../entities/user/api/api";
import { UsersSliceType } from "./types";



const initialState: UsersSliceType = {
    users: [],
    loading: 'idle',
    error: null
} 

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        moveToArchive: ({ users }, action: PayloadAction<{id: number}>) => {
            const indexUser = users.findIndex(user => user.id === action.payload.id)
            if(indexUser !== -1) {
                users[indexUser].archive = true
            }
        },
        removeFromArchive: ({ users }, action: PayloadAction<{id: number}>) => {
            const indexUser = users.findIndex(user => user.id === action.payload.id)
            if(indexUser !== -1) {
                users[indexUser].archive = false
            }
        },
        deleteUser: ({ users }, action: PayloadAction<{ id: number }>) => {
            const indexUser = users.findIndex(user => user.id === action.payload.id)
            if(indexUser !== -1) {
                users.splice(indexUser, 1)
            }
        },
        updateUserInfo: ({ users }, action: PayloadAction<{ user: IUser}>) => {
            const indexUser = users.findIndex(user => user.id === action.payload.user.id)
            if(indexUser !== -1) {
                users[indexUser] = action.payload.user
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllUsers.pending, (state) => {
            state.loading = "pending"
        })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loading = "succeeded"
                state.users = action.payload
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.loading = "failed"
                if(action.error.message) {
                    state.error = action.error.message
                } else {
                    state.error = "Произошла ошибка при загрузке пользователей"
                }
            })
    }
})

const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkConfig>()

export const getAllUsers = createAppAsyncThunk<IUser[], void, ThunkConfig>(`${usersSlice.name}/getAllUsers`, async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        const res = await apiUsers.getUsers()
        if(res) {
            return res.data.map((user: UserReturnData) => ({
                    ...user,
                    company: user.company.name,
                    archive: false,
                    city: user.address.city
            }))
        } else {
            throw Error("error")
        }
    } catch (err) {
        return rejectWithValue("Произошла ошибка при загрузке пользователей")
    }
})



export const { moveToArchive, removeFromArchive, deleteUser, updateUserInfo } = usersSlice.actions
export default usersSlice.reducer


