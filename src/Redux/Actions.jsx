// actions.js

import {
  SET_USER,
  AUTH_ERROR,
  LOGOUT,
 

} from './ActionTypes';

// Assuming you have a function to make API requests, such as axios
import axios from 'axios';

export const signup = (userData) => {
  return async (dispatch) => {
    try {
      // Make API call to signup endpoint
      const response = await axios.post('/api/signup', userData);
      // Dispatch action to update Redux state with user data
      dispatch({ type: SET_USER, payload: response.data });
    } catch (error) {
      // Handle signup error
      dispatch({ type: AUTH_ERROR, payload: error.response.data });
    }
  };
};

export const login = (userData) => {
  return async (dispatch) => {
    try {
      // Make API call to login endpoint
      const response = await axios.post('/api/login', userData);
      // Dispatch action to update Redux state with user data
      dispatch({ type: SET_USER, payload: response.data });
    } catch (error) {
      // Handle login error
      dispatch({ type: AUTH_ERROR, payload: error.response.data });
    }
  };
};

export const logout = () => {
  return { type: LOGOUT };
};
