import axios from 'axios';
import { POST_MAIL_SUCCESS, POST_MAIL_ERROR } from './types';
import { toast } from 'react-toastify';

const postMail = (newEmail) => async (dispatch) => {
  try {
    const res = await axios.post('/messages', newEmail)
    dispatch({
      type: POST_MAIL_SUCCESS,
      payload: res.data
    })
    toast.success('Success')
  } catch (err) {
    dispatch({
      type: POST_MAIL_ERROR,
      payload: err.response.data.message
    });
    toast.error(err.response.data.message)
  }
};

export default postMail;
