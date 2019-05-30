import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { http } from '../../utils/helpers';

import {
  REGISTRATION_INITIALIZED,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  authRequestInitializer,
  authRequestSuccessHandler,
  authRequestErrorHandler,
  initialState,
  authenticationRequestHandler,
  authReducer,
} from './auth';

const mockStore = configureStore([thunk]);
const store = mockStore(initialState);
const mockData = {
  status: 'success',
  message: 'your article has been created successfully',
  data: {
    id: '52397071-032f-484c-9339-92d9f19c61ce',
    userId: '5a6fab9c-5849-4be5-973c-5a371165cd57',
    title: 'sikdhkdnkdd',
    slug: 'sikdhkdnkdd-ellm6gutjowlghqa',
    description: 'gnfmbfjfjfnfjffnfnffnfn...',
    body: '<p>gnfmbfjfjfnfjffnfnffnfn</p> ',
    imageThumbnail: '',
    readTime: '0',
    subscriptionType: 'FREE',
    status: 'DRAFT',
    updatedAt: '2019-05-17T10:38:03.829Z',
    createdAt: '2019-05-17T10:38:03.829Z',
    tags: null,
  },
};

describe('Login User', () => {
  it('should dispatch an action for sign up request', () => {
    const action = {
      type: REGISTRATION_INITIALIZED,
    };
    expect(authRequestInitializer('signup')).toEqual(action);
  });

  it('should dispatch an action for sign up success', () => {
    const response = { isLoading: false };
    const action = {
      type: REGISTRATION_SUCCESS,
      ...response,
    };
    const resp = authRequestSuccessHandler('signup', response);
    // eslint-disable-next-line no-console
    console.log(resp);
    expect(authRequestSuccessHandler('signup', response)).toEqual(action);
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
