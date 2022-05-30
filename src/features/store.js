import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/posts';
import userReducer from './user';
import snackbarReducer from './snackbar';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
    snackbar: snackbarReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
