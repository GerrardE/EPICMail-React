import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import { SET_CURRENT_USER, LOADING, REGISTER_USER_SUCCESS, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, REGISTER_USER_ERROR, } from './types';
import setAuthToken from '../utils/setAuthToken';

axios.defaults.baseURL =
  'https://epic-m.herokuapp.com/api/v2';


export const setLoading = () => ({
  type: LOADING
});

// Set Logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
});

// Register User
export const registerUser = (userData, history) => async (dispatch) => {
  try {
    const res = await axios.post('/auth/signup', userData);
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: res.data
    });
    toast.info(res.data.credentials, {
      position: "top-center",
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true
    });
    history.push('/login')
  } catch (err) {
    dispatch({
      type: REGISTER_USER_ERROR,
      payload: err.response.data
    });
    toast.error(err.response.data.message)
  }
};

// Login User
export const loginUser = (loginData, history) => async (dispatch) => {
  try {
    const res = await axios.post('/auth/login', loginData);
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: res.data
    });
    history.push('/inbox');
    toast.success('Login successful')
    // Get token, save to local storage
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);

    // Set token to auth header
    setAuthToken(token);

    // Decode token, get user
    const decoded = jwtDecode(token);

    // Set current user
    dispatch(setCurrentUser(decoded));
  } catch (err) {
    dispatch({
      type: LOGIN_USER_ERROR,
      payload: err.response.data
    });
    toast.error(err.response.data.message)
  }
};

// Logout User
export const logoutUser = (history) => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');

  // Remove the Auth header for future requests
  setAuthToken(false);

  // Set current user to {} thereby setting isAuthenticated to false
  dispatch(setCurrentUser({}));
  toast.success('Logout successful. Please login.')
  
  history.push('/login');
};
