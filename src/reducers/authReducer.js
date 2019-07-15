import { SET_CURRENT_USER, LOADING } from '../actions/types';
import isEmpty from '../validation/isEmpty';

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

    default: return state;
  }
}
