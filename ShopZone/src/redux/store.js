import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';
import searchSlice from './features/searchSlice';


import { amazonDataApi } from './services/AmazonApi';
import authReducer, { loadUser } from './slices/authSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    [amazonDataApi.reducerPath]: amazonDataApi.reducer,
    cart: cartReducer,
    user: userReducer,
    auth: authReducer,
    search: searchSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(amazonDataApi.middleware)
});

store.dispatch(loadUser(null));

export default store;
