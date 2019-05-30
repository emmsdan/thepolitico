import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const setupStore = initialState => mockStore(initialState);

import { http } from '../../utils/helpers';

import {
  ALL_PARTIES_INITIALIZED,
  ALL_PARTIES_SUCCESS,
  ALL_PARTIES_ERROR,
  DELETE_PARTY_INITIALIZED,
  DELETE_PARTY_SUCCESS,
  DELETE_PARTY_ERROR,
  CREATE_PARTY_INITIALIZED,
  CREATE_PARTY_SUCCESS,
  CREATE_PARTY_ERROR,
  partyRequestSuccessHandler,
  partyRequestErrorHandler,
  partyRequestInitializer,
  deletePartySuccess,
  deletePartyError,
  deletePartyInitialized,
  createPartySuccess,
  createPartyError,
  createPartyInitialized,
  initialState,
  createPartyRequestHandler,
  getPartyDeleteRequestHandler,
  partyReducer,
} from './party';

let store;

describe('PARTY REQUEST HANDLERS', () => {
  beforeEach(() => {
    store = setupStore(initialState);
  });

  it('should dispatch a create party action', () => {
    http.post = jest
      .fn()
      .mockReturnValue(Promise.reject(new Error('something bad happened')));
    const errorActions = [
      { type: 'CREATE_PARTY_INITIALIZED' },
      { type: 'CREATE_PARTY_ERROR' },
    ];
    store.dispatch(createPartyRequestHandler()).then(() => {
      expect(store.getActions()).toEqual(errorActions);
    });
  });

  it('should dispatch a delete party action', () => {
    http.post = jest
      .fn()
      .mockReturnValue(Promise.reject(new Error('something bad happened')));
    const errorActions = [
      { type: 'DELETE_PARTY_INITIALIZED' },
      { type: 'DELETE_PARTY_ERROR' },
    ];
    store.dispatch(getPartyDeleteRequestHandler()).then(() => {
      expect(store.getActions()).toEqual(errorActions);
    });
  });
});
describe('CREATE PARTY ACTIONS', () => {
  it('should dispatch an action for create party request', () => {
    const action = {
      type: CREATE_PARTY_INITIALIZED,
    };
    expect(createPartyInitialized()).toEqual(action);
  });
  it('should dispatch an action for create parties success', () => {
    const response = {};
    const action = {
      type: CREATE_PARTY_SUCCESS,
      response,
    };
    expect(createPartySuccess(response)).toEqual(action);
  });
  it('should dispatch an action for create parties error', () => {
    const error = '';
    const action = {
      type: CREATE_PARTY_ERROR,
      error,
    };
    expect(createPartyError(error)).toEqual(action);
  });
});

describe('DELETE PARTY ACTIONS', () => {
  it('should dispatch an action for delete party request', () => {
    const action = {
      type: DELETE_PARTY_INITIALIZED,
    };
    expect(deletePartyInitialized()).toEqual(action);
  });
  it('should dispatch an action for delete parties success', () => {
    const response = {};
    const action = {
      type: DELETE_PARTY_SUCCESS,
      response,
    };
    expect(deletePartySuccess(response)).toEqual(action);
  });
  it('should dispatch an action for delete parties error', () => {
    const error = '';
    const action = {
      type: DELETE_PARTY_ERROR,
      error,
    };
    expect(deletePartyError(error)).toEqual(action);
  });
});

describe('FETCH PARTY ACTIONS', () => {
  it('should dispatch an action for create party request', () => {
    const action = {
      type: ALL_PARTIES_INITIALIZED,
    };
    expect(partyRequestInitializer('parties')).toEqual(action);
  });
  it('should dispatch an action for parties success', () => {
    const response = {};
    const action = {
      type: ALL_PARTIES_SUCCESS,
      response,
    };
    expect(partyRequestSuccessHandler('parties', response)).toEqual(action);
  });
  it('should dispatch an action for parties error', () => {
    const error = '';
    const action = {
      type: ALL_PARTIES_ERROR,
      error,
    };
    expect(partyRequestErrorHandler('parties', error)).toEqual(action);
  });
});

describe('party reducer test suite', () => {
  it('should return default state', () => {
    const state = partyReducer(initialState, { type: '' });
    expect(state).toEqual(initialState);
  });

  it('should return party Intialize reducer', () => {
    const action = partyRequestInitializer('parties');
    const state = partyReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should return get party success reducer', () => {
    const action = partyRequestSuccessHandler('parties', ['random', 'data']);
    const state = partyReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.parties).toEqual(action.response);
  });

  it('should return party failure reducer', () => {
    const action = partyRequestErrorHandler('parties');
    const state = partyReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.errorResponse).toEqual(action.error);
  });
});
