// rootReducer.js

import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer'; // Assuming your reducer file is named authReducer

const rootReducer = combineReducers({
  auth: Reducers, // You can add other reducers here if needed
});

export default Reducers;
