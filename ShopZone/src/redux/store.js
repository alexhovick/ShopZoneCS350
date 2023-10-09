import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import searchSlice from './features/searchSlice';

import { amazonDataApi } from './services/AmazonApi';

export const store = configureStore({
  reducer: {
    [amazonDataApi.reducerPath]: amazonDataApi.reducer,
    cart: cartReducer,
    user: userReducer,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(amazonDataApi.middleware)
});

export default store;
