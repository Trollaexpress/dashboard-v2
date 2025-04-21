import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axiosClient from '../../utils/api/axios-root-client';
import type {AxiosError} from 'axios';

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

export const loginUser = createAsyncThunk<
  AuthResponse,
  {email: string; password: string},
  {rejectValue: string}
>('auth/loginUser', async ({email, password}, {rejectWithValue}) => {
  try {
    const res = await axiosClient.post<AuthResponse>('/login', {
      email,
      password,
    });
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{message: string}>;
    const message =
      err.response?.data?.message || 'Login failed. Please try again.';
    return rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user_data');
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.isLoading = false;
          state.accessToken = action.payload.accessToken;
          state.refreshToken = action.payload.refreshToken;
          state.user = action.payload.user;

          localStorage.setItem('access_token', action.payload.accessToken);
          localStorage.setItem('refresh_token', action.payload.refreshToken);
          localStorage.setItem(
            'user_data',
            JSON.stringify(action.payload.user),
          );
        },
      )
      .addCase(
        loginUser.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload ?? 'Login failed. Please try again.';
        },
      );
  },
});

export const {logout} = authSlice.actions;
export default authSlice.reducer;
