// src/redux/actions/cartActions.js

import { createAction } from '@reduxjs/toolkit';

// Action to add an item to the cart
export const addToCart = createAction('cart/addToCart', (item) => ({
  payload: item,
}));

// Action to update the quantity of an item in the cart
export const updateCartItemQuantity = createAction('cart/updateCartItemQuantity', (item) => ({
  payload: item,
}));

// Action to remove an item from the cart
export const removeCartItem = createAction('cart/removeCartItem', (itemId) => ({
  payload: itemId,
}));