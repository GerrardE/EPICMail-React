import * as types from '../../src/actions/types'
import actionReducer from '../../src/reducers/actionReducer';

describe('Tests for the AUTH REDUCER', () => {
  test('INITIAL STATE', () => {
    const action = { type: 'dummy_action' };
    const initialState = {
      unread: null,
      read: null,
      sent: null,
      sentNow: null,
      draft: null,
      loading: false
    }

    expect(actionReducer(undefined, action)).toEqual(initialState);
  });

  test('Test for set LOADING', () => {
    const mock = {
      loading: true
    };

    const action = {
      isAuthenticated: false,
      type: types.LOADING
    };

    const state = actionReducer(undefined, action);

    expect(state).toEqual({
      ...state,
      ...mock
    });
  });

  test('Test for GET_UNREAD_SUCCESS', () => {
    const mock = {
      unread: []
    };

    const action = {
      type: types.GET_UNREAD_SUCCESS
    };

    const state = actionReducer(undefined, action);

    expect(state).toEqual({
      ...state,
      ...mock.unread
    });
  });

  test('Test for GET_READ_SUCCESS', () => {
    const mock = {
      read: []
    };

    const action = {
      type: types.GET_READ_SUCCESS
    };

    const state = actionReducer(undefined, action);

    expect(state).toEqual({
      ...state,
      ...mock.read
    });
  });

  test('Test for GET_SENT_SUCCESS', () => {
    const mock = {
      sent: []
    };

    const action = {
      type: types.GET_SENT_SUCCESS
    };

    const state = actionReducer(undefined, action);

    expect(state).toEqual({
      ...state,
      ...mock.sent
    });
  });

  test('Test for GET_DRAFT_SUCCESS', () => {
    const mock = {
      draft: []
    };

    const action = {
      type: types.GET_DRAFT_SUCCESS
    };

    const state = actionReducer(undefined, action);

    expect(state).toEqual({
      ...state,
      ...mock.draft
    });
  });

  test('Test for POST_MAIL_SUCCESS', () => {
    const mock = {
      sentNow: []
    };

    const action = {
      type: types.POST_MAIL_SUCCESS
    };

    const state = actionReducer(undefined, action);

    expect(state).toEqual({
      ...state,
      ...mock.sentNow
    });
  });
})
