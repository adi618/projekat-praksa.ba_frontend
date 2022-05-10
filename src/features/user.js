import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signUp } from '../api';

const initialState = {
  user: {},
  error: {
    isError: false,
    message: '',
  },
  isLoading: false,
};

export const createNewUser = createAsyncThunk(
  'user/add',
  async (userAndStatus, { rejectWithValue }) => {
    try {
      const response = await signUp(userAndStatus);

      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  },
);

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.error.isError = false;
      state.isLoading = false;
    },
    logout: (state) => {
      state.user = initialState.user;
      state.error = initialState.error;
      state.isLoading = initialState.isLoading;
    },
  },
  extraReducers: {
    [createNewUser.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
