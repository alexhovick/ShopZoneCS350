// src/redux/reducers/cartReducer.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      console.log('Adding to cart:', newItem);
    
      const existingItemIndex = state.findIndex((item) => item.product.asin === newItem.product.asin);
    
      if (existingItemIndex !== -1) {
        console.log('Item already exists, updating quantity.');
        const updatedItem = { ...state[existingItemIndex] };
        updatedItem.quantity += newItem.quantity;
        const updatedState = [...state];
        updatedState[existingItemIndex] = updatedItem;
        console.log('Updated state:', updatedState);
        return updatedState;
      } else {
        console.log('Adding a new item to cart.');
        const updatedState = [...state, newItem];
        console.log('Updated state:', updatedState);
        return updatedState;
      }
    },
    // updateCartItemQuantity: (state, action) => {
    //   const { asin, quantity } = action.payload;
    //   const itemIndex = state.findIndex((item) => item.asin === asin);

    //   if (itemIndex !== -1) {
    //     // Update the quantity of the specified item
    //     state[itemIndex].quantity = quantity;
    //   }
    //   if (quantity == 0){
    //     state.splice(itemIndex, 1)
    //   }
    // },

    updateCartItemQuantity: (state, action) => {
      const { asin, quantity } = action.payload;
      const itemIndex = state.findIndex((item) => item.product.asin === asin);
    
      if (itemIndex !== -1) {
        // Update the quantity of the specified item
        state[itemIndex].quantity = quantity;
      }
      if (quantity === 0) {
        state.splice(itemIndex, 1);
      }
    },

    // removeCartItem: (state, action) => {
    //   const itemAsin = action.payload;
    //   const itemIndex = state.findIndex((item) => item.asin === itemAsin);
    //   console.log("item to remove ASIN: "+ itemAsin);
    //   console.log("item to remove index: "+ itemIndex);
    //   if (itemIndex !== -1) {
    //     state.splice(itemIndex, 1);
    //   }
    // },
    removeCartItem: (state, action) => {
      const itemAsin = action.payload;
      const updatedState = state.filter((item) => item.product.asin !== itemAsin);
      return updatedState;
    },
  },
});

export const { addToCart, updateCartItemQuantity, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;

