import axios from 'axios';
import {
  LOADING, GET_READ_SUCCESS, GET_READ_ERROR, GET_UNREAD_SUCCESS, GET_UNREAD_ERROR, GET_SENT_SUCCESS, GET_SENT_ERROR, GET_DRAFT_SUCCESS, GET_DRAFT_ERROR
} from './types';

// Set dashboard loading
export const setLoading = () => ({
  type: LOADING
});

// Get unread mails
export const getUnread = () => async (dispatch) => {
  try {
    const res = await axios.get('/messages/unread')
    dispatch({
      type: GET_UNREAD_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: GET_UNREAD_ERROR,
      payload: err.response.data.message
    })
  }
};

// Get read mails
export const getRead = () => async(dispatch) => {
  try {
    const res = await axios.get('/messages/read')
    dispatch({
      type: GET_READ_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: GET_READ_ERROR,
      payload: err.response.data.message
    })
  }
};

// Get sent mails
export const getSent = () => async(dispatch) => {
  try {
    const res = await axios.get('/messages/sent')
    dispatch({
      type: GET_SENT_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: GET_SENT_ERROR,
      payload: err.response.data.message
    })
  }
};

// Get draft mails
export const getDrafts = () => async(dispatch) => {
  try {
    const res = await axios.get('/messages/draft');
    dispatch({
      type: GET_DRAFT_SUCCESS,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: GET_DRAFT_ERROR,
      payload: err.response.data.message
    })
  }
};
