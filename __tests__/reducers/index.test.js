import index from '../../src/reducers/index'

const initialState = {
  auth: {
    isAuthenticated: false,
    loading: false,
    user: {},
  },
  dashboard: {
    draft: null,
    loading: false,
    read: null,
    sent: null,
    sentNow: null,
    unread: null,
  },
  errors: {
    errors: null,
  },
}

describe('Index Reducer', () => {
  it('should return initial state', () => {
    const store = index(initialState, '');

    expect(store).toEqual(initialState);
  });
});
