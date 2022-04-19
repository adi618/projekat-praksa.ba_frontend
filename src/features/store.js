import { configureStore } from '@reduxjs/toolkit';

import userReducer from './user';

const reducer = {
  user: userReducer,
};

export const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
