import moxios from 'moxios';
import axios from 'axios';
import sinon from 'sinon';
import { equal } from 'assert';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/authActions';
import * as types from '../../src/actions/types';

const mockStore = configureStore([thunk]);

const store = mockStore({
  auth: {
    isAuthenticated: true,
    loading: false,
  },
});


describe('Tests for the AUTH ACTIONS', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  })

  test('Dispatches the REGISTER_USER_SUCCESS action and payload', (done) => {
    const userData = {
      firstname: 'gerrard',
      password: 'testpass'
    }

    moxios.withMock(() => {
      let onFulfilled = sinon.spy()
      axios.post('/auth/signup', {
        status: 200,
        payload: userData
      }).then(onFulfilled)

      moxios.wait(function () {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: userData
        }).then(function () {
          equal(onFulfilled.called, true)
          done()
        })
      })
    })

    const history = {
      push: jest.fn()
    }

    const expectedActions = [{
      type: types.REGISTER_USER_SUCCESS,
      payload: userData
    }]

    store.dispatch(actions.registerUser(userData, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done()
      })
  });

  test('Dispatches the LOGIN_USER_SUCCESS action and payload', (done) => {
    const loginData = {
      email: 'gerrard@gmail.com',
      password: 'testpass',
    }

    moxios.withMock(() => {
      let onFulfilled = sinon.spy()
      axios.post('/auth/login', loginData).then(onFulfilled)

      moxios.wait(() => {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: loginData
        }).then(() => {
          equal(onFulfilled.called, true)
          done()
        })
      })
    })

    const history = {
      push: jest.fn()
    }

    const expectedActions = [{
      type: types.LOGIN_USER_SUCCESS,
      payload: loginData,
    }]

    store.dispatch(actions.loginUser(loginData, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    done()
  });

  test('Dispatches the LOADING action', () => {
    const expectedActions = [{
      type: types.LOADING,
    }]

    store.dispatch(actions.setLoading())
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the SET_CURRENT_USER action', () => {
    const decoded = {}

    const expectedActions = [{
      type: types.SET_CURRENT_USER,
      payload: decoded
    }]

    store.dispatch(actions.setCurrentUser(decoded))
    expect(store.getActions()).toEqual(expectedActions);
  });

  test('Logs Out A Current User', () => {
    const history = {
      push: jest.fn()
    }

    const expectedActions = [{
      type: types.SET_CURRENT_USER,
      payload: {}
    }]

    store.dispatch(actions.logoutUser(history))
    expect(store.getActions()).toEqual(expectedActions);
  });
});
