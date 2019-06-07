import { DASHBOARD_LOADING, GET_UNREAD, GET_READ, GET_SENT, GET_DRAFTS } from "../actions/types";

const initialState = {
  unread: null,
  read: null,
  sent: null,
  drafts: null,
  loading: false
}

export default (state=initialState, action) => {
  switch (action.type) {
    case DASHBOARD_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_UNREAD:
      return {
        ...state,
        loading: false,
        unread: action.payload
      }

    case GET_READ:
      return {
        ...state,
        loading: false,
        read: action.payload
      }

    case GET_SENT:
      return {
        ...state,
        loading: false,
        sent: action.payload
      }

    case GET_DRAFTS:
      return {
        ...state,
        loading: false,
        sent: action.payload
      }

    default: return state;
  }
}