import { createSlice } from '@reduxjs/toolkit';
import { SNACKBAR_VARIANTS } from '../constants';

const initialState = {
  isVisible: false,
  message: '',
  variant: '',
};

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setSnackbar: (state, action) => {
      state.isVisible = action.payload.isVisible;
      state.message = action.payload?.message || 'Došlo je do greške';
      state.variant = action.payload?.variant || SNACKBAR_VARIANTS.ERROR;
    },
    hideSnackbar: (state) => {
      state.isVisible = false;
    },
  },
});

export const { setSnackbar, hideSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
