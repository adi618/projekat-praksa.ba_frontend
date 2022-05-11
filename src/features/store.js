import { configureStore } from '@reduxjs/toolkit';
import authComponentReducer from './authComponent';
import userReducer from './user';

const reducer = {
  authComponent: authComponentReducer,
  user: userReducer,
};

export const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
