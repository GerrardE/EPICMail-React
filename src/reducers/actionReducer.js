import {
  LOADING, GET_UNREAD, GET_READ, GET_SENT, GET_DRAFT, POST_MAIL,
} from '../actions/types';

const initialState = {
  unread: null,
  read: null,
  sent: null,
  sentNow: null,
  drafts: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_UNREAD:
      return {
        ...state,
        loading: false,
        unread: action.payload,
      };

    case GET_READ:
      return {
        ...state,
        loading: false,
        read: action.payload,
      };

    case GET_SENT:
      return {
        ...state,
        loading: false,
        sent: action.payload,
      };

    case GET_DRAFT:
      return {
        ...state,
        loading: false,
        draft: action.payload,
      };

    case POST_MAIL:
      return {
        ...state,
        loading: false,
        sentNow: action.payload,
      };

    default: return state;
  }
};
