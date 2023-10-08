// src/redux/reducers/cartReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.findIndex((item) => item.asin === action.payload.asin);
      console.log("reducer item index:"+itemIndex)

      if (itemIndex !== -1) {
        // If the item is already in the cart, update the quantity
        state[itemIndex].quantity += action.payload.quantity;
      } else {
        // If it's a new item, add it to the cart
        state.push(action.payload);
      }
    },
    updateCartItemQuantity: (state, action) => {
      const { asin, quantity } = action.payload;
      const itemIndex = state.findIndex((item) => item.asin === asin);

      if (itemIndex !== -1) {
        // Update the quantity of the specified item
        state[itemIndex].quantity = quantity;
      }
      if (quantity == 0){
        state.splice(itemIndex, 1)
      }
    },
    removeCartItem: (state, action) => {
      const itemAsin = action.payload;
      const itemIndex = state.findIndex((item) => item.asin === itemAsin);

      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
    },
  },
});

export const { addToCart, updateCartItemQuantity, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;

