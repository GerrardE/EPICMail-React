import * as types from '../../src/actions/types'
import authReducer from '../../src/reducers/authReducer';

describe('Tests for the AUTH REDUCER', () => {
  test('INITIAL STATE', () => {
    const action = { type: 'dummy_action' };
    const initialState = {
      isAuthenticated: false,
      loading: false,
      user: {},
    }

    expect(authReducer(undefined, action)).toEqual(initialState);
  });

  test('Test for SET_CURRENT_USER', () => {
    const mock = {
      isAuthenticated: false,
      loading: false
    };

    const action = {
      isAuthenticated: false,
      type: types.SET_CURRENT_USER
    };

    const state = authReducer(undefined, action);

    expect(state).toEqual({
      ...mock
    });
  });

  test('Test for set LOADING', () => {
    const mock = {
      isAuthenticated: false,
      loading: true,
      user: {}
    };

    const action = {
      isAuthenticated: false,
      type: types.LOADING
    };

    const state = authReducer(undefined, action);

    expect(state).toEqual({
      ...mock
    });
  });

  test('Test for REGISTER_USER_SUCCESS', () => {
    const mock = {
      isAuthenticated: false,
      loading: true,
      user: {}
    };

    const action = {
      isAuthenticated: false,
      type: types.REGISTER_USER_SUCCESS
    };

    const state = authReducer(undefined, action);

    expect(state).toEqual({
      ...mock
    });
  });

  test('Test for LOGIN_USER_SUCCESS', () => {
    const mock = {
      isAuthenticated: false,
      loading: true,
      user: {}
    };

    const action = {
      isAuthenticated: false,
      type: types.LOGIN_USER_SUCCESS
    };

    const state = authReducer(undefined, action);

    expect(state).toEqual({
      ...mock
    });
  });
})
