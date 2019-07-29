import {
  REGISTER_USER_ERROR, LOGIN_USER_ERROR, GET_DRAFT_ERROR, GET_READ_ERROR, GET_UNREAD_ERROR, POST_MAIL_ERROR, GET_SENT_ERROR
} from '../actions/types';

const initialState = {
  errors: null
}

export default function (state = initialState, action) {
  switch (action.type) {

    case REGISTER_USER_ERROR:
      return {
        errors: action.payload
      };

    case LOGIN_USER_ERROR:
      return {
        errors: action.payload
      };

      case GET_DRAFT_ERROR:
      return {
        errors: action.payload
      };

    case GET_UNREAD_ERROR:
      return {
        errors: action.payload
      };

    case GET_READ_ERROR:
      return {
        errors: action.payload
      };

    case POST_MAIL_ERROR:
      return {
        errors: action.payload
      };

    case GET_SENT_ERROR:
      return {
        errors: action.payload
      };

    default: return state;
  }
}
