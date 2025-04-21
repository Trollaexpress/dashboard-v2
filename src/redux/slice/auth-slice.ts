import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AxiosError } from 'axios';

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
  { email: string; password: string },
  { rejectValue: string }
>('auth/loginUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await axios.post<AuthResponse>(`${backendUrl}/login`, {
      email,
      password,
    });
    return res.data;
  } catch (error) {
    const err = error as AxiosError<{ message: string }>;
    return rejectWithValue(
      err.response?.data?.message || 'Login failed. Please try again.'
    );
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('persist:root');
      }
    },
    initializeAuth: (state) => {
      if (typeof window !== 'undefined') {
        const accessToken = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refresh_token');
        const userData = localStorage.getItem('user_data');
        
        if (accessToken && refreshToken && userData) {
          state.accessToken = accessToken;
          state.refreshToken = refreshToken;
          state.user = JSON.parse(userData);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      
.addCase(loginUser.fulfilled, (state, action) => {
  state.isLoading = false;
  state.accessToken = action.payload.accessToken;
  state.refreshToken = action.payload.refreshToken;
  state.user = action.payload.user;
  

  if (typeof window !== 'undefined') {
    document.cookie = `accessToken=${action.payload.accessToken}; path=/; max-age=${60 * 60 * 24}`;
    document.cookie = `refreshToken=${action.payload.refreshToken}; path=/; max-age=${60 * 60 * 24}`;
  }
})
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Login failed';
      });
      
  },
});

export const { logout, initializeAuth } = authSlice.actions;
export default authSlice.reducer;