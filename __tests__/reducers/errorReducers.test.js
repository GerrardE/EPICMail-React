import * as types from '../../src/actions/types'
import errorReducer from '../../src/reducers/errorReducer';

describe('Tests for the AUTH REDUCER', () => {
  test('INITIAL STATE', () => {
    const action = { type: 'dummy_action' };
    const initialState = {
      errors: null
    }

    expect(errorReducer(undefined, action)).toEqual(initialState);
  });

  test('Test for REGISTER_USER_ERROR', () => {
    const mock = {
      errors: {}
    };

    const action = {
      type: types.REGISTER_USER_ERROR
    };

    const state = errorReducer(undefined, action);

    expect(state).toEqual({
      ...mock.errors
    });
  });

  test('Test for LOGIN_USER_ERROR', () => {
    const mock = {
      errors: {}
    };

    const action = {
      type: types.LOGIN_USER_ERROR
    };

    const state = errorReducer(undefined, action);

    expect(state).toEqual({
      ...mock.errors
    });
  });

  test('Test for GET_DRAFT_ERROR', () => {
    const mock = {
      errors: null
    }

    const action = {
      type: types.GET_DRAFT_ERROR
    };

    const state = errorReducer(undefined, action);

    expect(state).toEqual({
      ...mock.errors
    });
  });

  test('Test for GET_READ_ERROR', () => {
    const mock = {
      errors: {}
    };

    const action = {
      type: types.GET_READ_ERROR
    };

    const state = errorReducer(undefined, action);

    expect(state).toEqual({
      ...mock.errors
    });
  });

  test('Test for GET_UNREAD_ERROR', () => {
    const mock = {
      errors: {}
    };

    const action = {
      type: types.GET_UNREAD_ERROR
    };

    const state = errorReducer(undefined, action);

    expect(state).toEqual({
      ...mock.errors
    });
  });

  test('Test for POST_MAIL_ERROR', () => {
    const mock = {
      errors: {}
    };

    const action = {
      type: types.POST_MAIL_ERROR
    };

    const state = errorReducer(undefined, action);

    expect(state).toEqual({
      ...mock.errors
    });
  });

  test('Test for GET_SENT_ERROR', () => {
    const mock = {
      errors: {}
    };

    const action = {
      type: types.GET_SENT_ERROR
    };

    const state = errorReducer(undefined, action);

    expect(state).toEqual({
      ...mock.errors
    });
  });
})
