import { GET_ERRORS } from "./types";
import axios from 'axios';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios.post(`${process.env.DB_HOST}/auth/signup`, userData)
    .then(res => history.push('/login'))
    .catch(err => {
      console.log(err.response)
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })});
}