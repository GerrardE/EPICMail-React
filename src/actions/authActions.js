import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, LOADING } from './types';
import setAuthToken from '../utils/setAuthToken';

export const setLoading = () => ({
  type: LOADING
});

// Set Logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
});

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post(`${process.env.DB_HOST}/auth/signup`, userData)
    .then(() => history.push('/login'))
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Login User
export const loginUser = (loginData, history) => (dispatch) => {
  axios
    .post(`${process.env.DB_HOST}/auth/login`, loginData)
    .then((res) => {
      dispatch(setLoading());
      // Get token, save to local storage
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);

      // Set token to auth header
      setAuthToken(token);

      // Decode token, get user
      const decoded = jwtDecode(token);

      // Set current user
      dispatch(setCurrentUser(decoded));
      history.push('/inbox');
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Logout User
export const logoutUser = () => (dispatch, history) => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');

  // Remove the Auth header for future requests
  setAuthToken(false);

  // Set current user to {} thereby setting isAuthenticated to false
  dispatch(setCurrentUser({}));
  history.push('/login');
};
