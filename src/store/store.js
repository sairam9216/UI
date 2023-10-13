import { configureStore, isRejectedWithValue } from '@reduxjs/toolkit';
import userReducer from './slice/userSlice';
import { setUserData } from 'store/slice/userSlice';
import { removeToken } from 'utils';

import { blueedApi } from './baseQuery';

const rtkQueryErrorLogger = (api) => (next) => async (action) => {
  if (isRejectedWithValue(action)) {
    if (action.payload.status === 401 || action.payload.status === 403) {
      api.dispatch(setUserData(null));
      removeToken();
      localStorage.setItem('referralUrl', window.location.pathname);
      window.location.reload();
    }
  }
  return next(action);
};

export const store = configureStore({
  reducer: {
    [blueedApi.reducerPath]: blueedApi.reducer,
    userData: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkQueryErrorLogger, blueedApi.middleware)
});
