import {
  LOGIN_USER,
  LOGOUT_USER,
  SIGNUP_USER,
  FETCH_USER,
  SET_USER_CREDENTIALS,
} from "../Redux/ActionTypes";

export const loginUser = () => {
  return {
    type: LOGIN_USER,
  };
};
export const fetchUser = (res) => {
  return {
    type: FETCH_USER,
    payload: res,
  };
};
export const signupUser = () => {
  return {
    type: SIGNUP_USER,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const setUserCredentials = (username, password) => {
  return {
    type: SET_USER_CREDENTIALS,
    payload: { username, password },
  };
};
