import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, signUp, verifyToken } from '../api';

const initialState = {
  isLoggedIn: false,
  user: {},
  error: {
    isError: false,
    message: '',
  },
  isLoading: false,
};

export const verifyTokenUser = createAsyncThunk(
  'user/verifyToken',
  async (token, { rejectWithValue }) => {
    try {
      const response = await verifyToken(token);

      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const signUpUser = createAsyncThunk(
  'user/signUp',
  async (user, { rejectWithValue }) => {
    try {
      const response = await signUp(user);

      return response.data;
    } catch (err) {
      return rejectWithValue(JSON.parse(err.response.request.responseText).message);
    }
  },
);

export const signInUser = createAsyncThunk(
  'user/signIn',
  async (user, { rejectWithValue }) => {
    try {
      const response = await signIn(user);

      return response.data;
    } catch (err) {
      return rejectWithValue(JSON.parse(err.response.request.responseText).message);
    }
  },
);

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {};
      state.error = { isError: false, message: '' };
      state.isLoading = false;
      localStorage.removeItem('token');
    },
  },
  extraReducers: {
    [signUpUser.pending]: (state) => {
      state.isLoggedIn = false;
      state.isLoading = true;
    },
    [signUpUser.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      const { user, token } = action.payload;
      state.user = user;
      localStorage.setItem('token', token);
      state.error.isError = false;
      state.isLoading = false;
    },
    [signUpUser.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.error.message = action.payload;
      state.error.isError = true;
      state.isLoading = false;
    },
    [signInUser.pending]: (state) => {
      state.isLoggedIn = false;
      state.isLoading = true;
    },
    [signInUser.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      const { user, token } = action.payload;
      state.user = user;
      localStorage.setItem('token', token);
      state.error.isError = false;
      state.isLoading = false;
    },
    [signInUser.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.error.message = action.payload;
      state.error.isError = true;
      state.isLoading = false;
    },
    [verifyTokenUser.pending]: (state) => {
      state.isLoggedIn = false;
      state.isLoading = true;
    },
    [verifyTokenUser.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      const { user, token } = action.payload;
      state.user = user;
      localStorage.setItem('token', token);
      state.error.isError = false;
      state.isLoading = false;
    },
    [verifyTokenUser.rejected]: (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
