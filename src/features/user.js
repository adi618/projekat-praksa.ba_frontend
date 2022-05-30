import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signIn, signUp, verifyToken } from '../api';
import { setSnackbar } from './snackbar';
import { AUTHENTICATION_TYPE, SNACKBAR_VARIANTS } from '../constants';

const { LOGIN, REGISTER } = AUTHENTICATION_TYPE;

const initialState = {
  isLoggedIn: false,
  user: {},
  error: {
    isError: false,
    message: '',
  },
  isLoading: false,
};

const authenticate = async (user, { rejectWithValue, dispatch }, type) => {
  try {
    let response;
    if (type === LOGIN) {
      response = await signIn(user);
    } else if (type === 'register') {
      response = await signUp(user);
    } else {
      throw new Error();
    }
    dispatch(setSnackbar({
      isVisible: true,
      message: `Uspješno ste se ${
        type === LOGIN ? 'prijavili!' : 'registrovali!'
      }`,
      variant: SNACKBAR_VARIANTS.SUCCESS,
    }));

    return response.data;
  } catch (err) {
    let errorMessage;
    if (err?.response?.request?.responseText) {
      errorMessage = JSON.parse(err?.response?.request?.responseText)?.message;
    }
    dispatch(setSnackbar({
      isVisible: true,
      message: errorMessage,
      variant: SNACKBAR_VARIANTS.ERROR,
    }));
    return rejectWithValue(errorMessage);
  }
};

const authenticateFulfilled = (state, action) => {
  state.isLoggedIn = true;
  const { user, token } = action.payload;
  state.user = user;
  localStorage.setItem('token', token);
  state.error.isError = false;
  state.isLoading = false;
};

const authenticatePending = (state) => {
  state.isLoggedIn = false;
  state.isLoading = true;
  state.error.isError = false;
};

const authenticateRejected = (state, action) => {
  state.isLoggedIn = false;
  state.error.message = action.payload;
  state.error.isError = true;
  state.isLoading = false;
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
  async (user, { rejectWithValue, dispatch }) => authenticate(
    user,
    { rejectWithValue, dispatch },
    REGISTER,
  ),
);

export const signInUser = createAsyncThunk(
  'user/signIn',
  async (user, { rejectWithValue, dispatch }) => authenticate(
    user,
    { rejectWithValue, dispatch },
    LOGIN,
  ),
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
    [signUpUser.fulfilled]: authenticateFulfilled,
    [signUpUser.pending]: authenticatePending,
    [signUpUser.rejected]: authenticateRejected,
    [signInUser.fulfilled]: authenticateFulfilled,
    [signInUser.pending]: authenticatePending,
    [signInUser.rejected]: authenticateRejected,
    [verifyTokenUser.fulfilled]: authenticateFulfilled,
    [verifyTokenUser.pending]: authenticatePending,
    [verifyTokenUser.rejected]: (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
