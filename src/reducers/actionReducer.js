import {
  LOADING, GET_UNREAD_SUCCESS, GET_READ_SUCCESS, GET_SENT_SUCCESS, GET_DRAFT_SUCCESS, POST_MAIL_SUCCESS,
} from '../actions/types';

const initialState = {
  unread: null,
  read: null,
  sent: null,
  sentNow: null,
  draft: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_UNREAD_SUCCESS:
      return {
        ...state,
        loading: false,
        unread: action.payload,
      };

    case GET_READ_SUCCESS:
      return {
        ...state,
        loading: false,
        read: action.payload,
      };

    case GET_SENT_SUCCESS:
      return {
        ...state,
        loading: false,
        sent: action.payload
      };

    case GET_DRAFT_SUCCESS:
      return {
        ...state,
        loading: false,
        draft: action.payload,
      };

    case POST_MAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        sentNow: action.payload,
      };

    default: return state;
  }
};
