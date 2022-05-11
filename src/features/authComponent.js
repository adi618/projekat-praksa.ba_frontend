import { createSlice } from '@reduxjs/toolkit';
import { AUTH_COMPONENTS } from '../constants';

const initialState = {
  currentComponent: AUTH_COMPONENTS.STUDENT,
};

export const authComponentSlice = createSlice({
  name: 'authComponentData',
  initialState,
  reducers: {
    setCurrentComponent: (state, action) => {
      state.currentComponent = action.payload;
    },
  },
});

export const { setCurrentComponent } = authComponentSlice.actions;

export default authComponentSlice.reducer;
