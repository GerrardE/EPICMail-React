import axios from "axios";
import { GET_ERRORS } from "./types";

export const postMail = (newEmail, history) => dispatch => {
  axios
    .post(`${process.env.DB_HOST}/messages`, newEmail)
    .then(() => history.push('/sent'))
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    })
}
