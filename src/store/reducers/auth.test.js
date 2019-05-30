import { http } from '../../utils/helpers';
import {
  REGISTRATION_SUCCESS,
  REGISTRATION_INITIALIZED,
  REGISTRATION_ERROR,
  LOGIN_SUCCESS,
  LOGIN_INITIALIZED,
  authRequestInitializer,
  authRequestSuccessHandler,
  authRequestErrorHandler,
  authenticationRequestHandler,
  authReducer,
} from './auth';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const setupStore = initialState => mockStore(initialState);

let store;

const initialState = {
  isLoading: false,
  errorResponse: [],
  successResponse: { status: '' },
  loggedInUser: {},
};
describe('SIGNUP ACTIONS', () => {
  const signupMockData = {
    status: 'success',
    message: 'Please check your mail to verify your account',
    data: {
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFhN2RmMzY5LTgyNTYtNDZhZS05ZDZmLTEwODhmMzg4M2U5MyIsImVtYWlsIjoia2tAemFoLmNvbSIsImlhdCI6MTU1NzQxMDc3NSwiZXhwIjoxNTYwMDAyNzc1fQ.MgpJl20ZjZmQIOcXJ7KjHgilwOjW9DrGCUhXJV7rjwM',
    },
  };

  beforeEach(() => {
    store = setupStore(initialState);
  });

  it('should dispatch an action for sign up request', () => {
    const action = {
      type: REGISTRATION_INITIALIZED,
    };
    expect(authRequestInitializer('signup')).toEqual(action);
  });
  it('should dispatch an action for sign up success', () => {
    const action = {
      response: {},
      type: 'REGISTRATION_SUCCESS',
    };
    expect(authRequestSuccessHandler('signup', action)).toEqual(action);
  });

  it('should dispatch an action for sign up error', () => {
    const error = '';
    const action = {
      type: REGISTRATION_ERROR,
      error,
    };
    expect(authRequestErrorHandler('signup', error)).toEqual(action);
  });

  it('should dispatch a failed signup action', () => {
    http.post = jest
      .fn()
      .mockReturnValue(Promise.reject(new Error('something bad happened')));
    const errorActions = [
      { type: 'REGISTRATION_INITIALIZED' },
      { type: 'REGISTRATION_ERROR' },
    ];
    store.dispatch(authenticationRequestHandler()).then(() => {
      expect(store.getActions()).toEqual(errorActions);
    });
  });
});

const loggedInUser = {
  id: '270a37f7-765a-4626-8317-29e6a62d97b9',
  email: 'favourafolayan@gmail.com',
  username: 'favourafolayan@gmail.com',
};

describe('auth reducer test suite', () => {
  beforeEach(() => {
    store = setupStore(initialState);
  });

  it('should return default state', () => {
    const state = authReducer(initialState, { type: '' });
    expect(state).toEqual(initialState);
  });

  it('should return signUpIntialize reducer', () => {
    const action = authRequestInitializer('signup');
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(false);
  });

  it('should return signup success reducer', () => {
    const action = authRequestSuccessHandler('signup', {
      response: { status: '' },
    });
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.successResponse).toEqual(action.response);
  });

  it('should return signup failure reducer', () => {
    const action = authRequestErrorHandler('signup', []);
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.errorResponse).toEqual(action.error);
  });

  it('should return loginIntialize reducer', () => {
    const action = authRequestInitializer('login');
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should return login success reducer', () => {
    const action = authRequestSuccessHandler('login');
    const state = authReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.successResponse).toEqual(action.response);
  });
});
