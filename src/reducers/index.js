// The root reducer
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import actionReducer from './actionReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  dashboard: actionReducer
});
