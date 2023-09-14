// src/store/reducers/cartReducer.js

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // Handle adding items to the cart state
    },
    // Add other cart-related reducers here
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;