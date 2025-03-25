import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {rootClient} from '../../utils';
import {
  LoginReq,
  LoginRes,
  LogoutRes,
  UserSelfReq,
  UserSelfRes,
} from '../../types';
import {DashboardUser} from '@/types/types';

type InitialState = {
  access_token: string | null;
  refresh_token: string | null;
  is_loading: boolean;
  error_message: string;
  is_login: boolean;
  user?: DashboardUser;
};

const initialState: InitialState = {
  access_token: '',
  refresh_token: '',
  is_loading: false,
  error_message: '',
  is_login: false,
  user: undefined,
};

export const login = createAsyncThunk(
  'user-login',
  async (body: LoginReq, {rejectWithValue}) => {
    try {
      const response = (await rootClient.post('login', body)) as LoginRes;
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk(
  'user-logout',
  async (arg: LoginReq, {rejectWithValue}) => {
    try {
      const response = (await rootClient.get('logout')) as LogoutRes;
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const userSelf = createAsyncThunk(
  'user-self',
  async (arg: UserSelfReq, {rejectWithValue}) => {
    try {
      const response = (await rootClient.get('user-self')) as UserSelfRes;
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: 'user-auth',
  initialState,
  reducers: {
    authStateError(state) {
      state.error_message = '';
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.access_token = action.payload;
    },
    setRefreshToken(state, action: PayloadAction<string>) {
      state.refresh_token = action.payload;
    },
    clearAuthState: () => initialState,
  },
  extraReducers(builder) {
    // login
    builder
      .addCase(login.pending, state => {
        state.error_message = '';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.access_token = action.payload.accessToken;
        state.refresh_token = action.payload.refreshToken;
        state.error_message = '';
        state.is_login = true;
      })
      .addCase(login.rejected, state => {
        state.is_login = false;
      });
    // logout
    builder
      .addCase(logout.pending, state => {
        state.is_loading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.is_loading = false;
        state.is_login = false;
      })
      .addCase(logout.rejected, state => {
        state.is_loading = false;
      });
    // user-self

    builder
      .addCase(userSelf.pending, state => {
        state.is_loading = true;
      })
      .addCase(userSelf.fulfilled, (state, action) => {
        state.is_loading = false;
        state.user = action.payload.user;
      })
      .addCase(userSelf.rejected, state => {
        state.is_loading = false;
      });
  },
});

export const {clearAuthState, authStateError, setAccessToken, setRefreshToken} =
  authSlice.actions;

export default authSlice.reducer;
