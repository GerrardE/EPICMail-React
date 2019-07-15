import axios from 'axios';
import {
  LOADING, GET_ERRORS, GET_UNREAD, GET_READ, GET_SENT, GET_DRAFT
} from './types';

// Set dashboard loading
export const setLoading = () => ({
  type: LOADING
});

// Get unread mails
export const getUnread = () => (dispatch) => {
  // dispatch(setDashboardLoading());
  axios.get(`${process.env.DB_HOST}/messages/unread`)
    .then(res => dispatch({
      type: GET_UNREAD,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_UNREAD,
      payload: null
    }));
};

// Get read mails
export const getRead = () => (dispatch) => {
  axios.get(`${process.env.DB_HOST}/messages/read`)
    .then(res => dispatch({
      type: GET_READ,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: {}
    }));
};

// Get sent mails
export const getSent = () => (dispatch) => {
  axios.get(`${process.env.DB_HOST}/messages/sent`)
    .then(res => dispatch({
      type: GET_SENT,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: {}
    }));
};

// Get draft mails
export const getDrafts = () => (dispatch) => {
  axios
    .get(`${process.env.DB_HOST}/messages/draft`)
    .then(res => dispatch({
      type: GET_DRAFT,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: {}
    }));
};
