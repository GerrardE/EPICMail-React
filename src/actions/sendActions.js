import axios from 'axios';
import { GET_ERRORS, POST_MAIL } from './types';

const postMail = (newEmail, history) => (dispatch) => {
  axios
    .post(`${process.env.DB_HOST}/messages`, newEmail)
    .then((res) => dispatch({
      type: POST_MAIL,
      payload: res.data
    }))
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export default postMail;
