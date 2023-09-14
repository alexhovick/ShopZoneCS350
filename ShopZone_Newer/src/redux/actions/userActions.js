// src/store/actions/userActions.js

import { login } from '../reducers/userReducer';

export const loginUser = (user) => (dispatch) => {
  dispatch(login(user));
};