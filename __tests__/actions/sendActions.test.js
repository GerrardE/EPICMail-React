import moxios from 'moxios';
import axios from 'axios';
import sinon from 'sinon';
import { equal } from 'assert';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import postMail from '../../src/actions/sendActions';
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


describe('Tests for the SEND ACTIONS', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  })

  test('Dispatches the POST_MAIL_ERROR action and payload', (done) => {
    const mail = {
      test: 'article'
    }

    moxios.withMock(() => {
      let onFulfilled = sinon.spy()
      axios.post('/messages').then(onFulfilled)

      moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 400,
          response: mail
        }).then(() => {
          equal(onFulfilled.called, false)
          done()
        })
      })
    })

    const expectedActions = [{
      type: types.POST_MAIL_ERROR,
      payload: undefined
    }]

    store.dispatch(postMail(mail))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done()
      })
  });

  test('Dispatches the POST_MAIL_SUCCESS action and payload', (done) => {
    const mail = {
      test: 'article'
    }

    moxios.withMock(() => {
      let onFulfilled = sinon.spy()
      axios.post('/messages', {
        status: 200,
        payload: mail
      }).then(onFulfilled)

      moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: mail
        }).then(() => {
          equal(onFulfilled.called, true)
          done()
        })
      })
    })

    const expectedActions = [{
      type: types.POST_MAIL_SUCCESS,
      payload: mail
    }]

    store.dispatch(postMail(mail))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done()
      })
  });
})
