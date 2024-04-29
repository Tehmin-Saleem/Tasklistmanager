import {
  LOGIN_USER,
  LOGOUT_USER,
  FETCH_USER,
  SET_USER_CREDENTIALS,
} from "../Redux/ActionTypes";

const initialState = {
  loggedIn: false,
  userData: null,
  username: "",
  password: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loggedIn: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loggedIn: false,
        userData: null,
        username: "",
        password: "",
      };
    case FETCH_USER:
      return {
        ...state,
        userData: action.payload,
      };
    case SET_USER_CREDENTIALS:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };
    default:
      return state;
  }
};

export default reducer;
