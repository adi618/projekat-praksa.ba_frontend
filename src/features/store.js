import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/posts';
import authComponentReducer from './authComponent';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    authComponent: authComponentReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
