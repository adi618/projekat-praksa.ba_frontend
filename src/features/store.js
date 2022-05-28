import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/posts';
import userReducer from './user';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
