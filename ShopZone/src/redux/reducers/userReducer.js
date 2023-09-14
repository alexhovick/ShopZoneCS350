// src/store/reducers/userReducer.js

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    login: (state, action) => {
      // Handle user login state changes
    },
    // Add other user-related reducers here
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;