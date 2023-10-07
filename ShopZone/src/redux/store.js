import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import userReducer from './reducers/userReducer';

//import { amazonDataApi } from './services/AmazonApi';

export const store = configureStore({
  reducer: {
    //[amazonDataApi.reducerPath]: amazonDataApi.reducer,
    cart: cartReducer,
    user: userReducer,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(amazonDataApi.middleware)
});

export default store;
