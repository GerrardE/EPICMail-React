import { DASHBOARD_LOADING, GET_ERRORS, GET_UNREAD, GET_READ, GET_SENT, GET_DRAFTS } from "./types";
import axios from "axios";

// Set dashboard loading
export const dashboardLoading = () => {
  return {
    type: DASHBOARD_LOADING
  }
}

// Get unread mails
export const getUnread = () => dispatch => {
  // dispatch(setDashboardLoading());
  axios.get(`${process.env.DB_HOST}/messages/unread`)
    .then((res) =>
      dispatch({
        type: GET_UNREAD,
        payload: res.data
      }))
    .catch((err) =>
      dispatch({
        type: GET_UNREAD,
        payload: null
      }))
}

// Get read mails
export const getRead = () => dispatch => {
  axios.get(`${process.env.DB_HOST}/messages/read`)
    .then((res) =>
      dispatch({
        type: GET_READ,
        payload: res.data
      }))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      }))
}

// Get sent mails
export const getSent = () => dispatch => {
  axios.get(`${process.env.DB_HOST}/messages/sent`)
    .then((res) =>
      dispatch({
        type: GET_SENT,
        payload: res.data
      }))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      }))
}

// Get sent mails
export const getDrafts = () => dispatch => {
  axios
    .get(`${process.env.DB_HOST}/messages/draft`)
    .then((res) =>
      dispatch({
        type: GET_DRAFTS,
        payload: res.data
      }))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      }))
}
