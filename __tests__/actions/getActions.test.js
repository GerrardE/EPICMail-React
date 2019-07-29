import moxios from 'moxios';
import axios from 'axios';
import sinon from 'sinon';
import { equal } from 'assert';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/getActions';
import * as types from '../../src/actions/types';

const mockStore = configureStore([thunk]);

const store = mockStore({
  auth: {
    isAuthenticated: true,
    loading: false,
  },
  dashboard: {
    unread: null,
    read: null,
    sent: null,
    sentNow: null,
    draft: null,
    loading: false
  }
});


describe('Tests for the GET ACTIONS', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  })

  test('Dispatches the LOADING action', () => {
    const expectedActions = [{
      type: types.LOADING,
    }]

    store.dispatch(actions.setLoading())
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the GET_READ_SUCCESS action and payload', (done) => {
    const payload = {
      test: 'article'
    }

    moxios.withMock(() => {
      let onFulfilled = sinon.spy()
      axios.get('/messages/read', {status: 200}).then(onFulfilled)

      moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: payload
        }).then(() => {
          equal(onFulfilled.called, false)
          done()
        })
      })
    })

    const expectedActions = [{
      type: types.GET_READ_SUCCESS,
      payload
    }]

    store.dispatch(actions.getRead())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done()
      })
    done()
  });

  test('Dispatches the GET_UNREAD_SUCCESS action and payload', (done) => {
    const payload = {
      test: 'article'
    }

    moxios.withMock(() => {
      let onFulfilled = sinon.spy()
      axios.get('/messages/unread').then(onFulfilled)

      moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: payload
        }).then(() => {
          equal(onFulfilled.called, true)
          done()
        })
      })
    })

    const expectedActions = [{
      type: types.GET_UNREAD_SUCCESS,
      payload
    }]

    store.dispatch(actions.getUnread())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done()
      })
  });

  test('Dispatches the GET_SENT_SUCCESS action and payload', (done) => {
    const payload = {
      test: 'article'
    }

    moxios.withMock(() => {
      let onFulfilled = sinon.spy()
      axios.get('/messages/sent').then(onFulfilled)

      moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: payload
        }).then(() => {
          equal(onFulfilled.called, true)
          done()
        })
      })
    })

    const expectedActions = [{
      type: types.GET_SENT_SUCCESS,
      payload
    }]

    store.dispatch(actions.getSent())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done()
      })
  });

  test('Dispatches the GET_DRAFT_SUCCESS action and payload', (done) => {
    const payload = {
      test: 'article'
    }

    moxios.withMock(() => {
      let onFulfilled = sinon.spy()
      axios.get('/messages/draft').then(onFulfilled)

      moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: payload
        }).then(() => {
          equal(onFulfilled.called, true)
        })
      })
    })

    const expectedActions = [{
      type: types.GET_DRAFT_SUCCESS,
      payload
    }]

    store.dispatch(actions.getDrafts())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done()
      })
  });
})
