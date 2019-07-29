import { SET_CURRENT_USER, LOADING, REGISTER_USER_SUCCESS, LOGIN_USER_SUCCESS } from '../actions/types';
import isEmpty from '../validations/isEmpty';

// The Auth Reducer

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: true,
      };

    default: return state;
  }
}
