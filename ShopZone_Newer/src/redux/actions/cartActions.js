// src/store/actions/cartActions.js

import { addToCart } from '../reducers/cartReducer';

export const addItemToCart = (item) => (dispatch) => {
  dispatch(addToCart(item));
};