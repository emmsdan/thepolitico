import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const setupStore = initialState => mockStore(initialState);

import { http } from '../../utils/helpers';

import {
  ALL_OFFICES_INITIALIZED,
  ALL_OFFICES_SUCCESS,
  ALL_OFFICES_ERROR,
  DELETE_OFFICE_INITIALIZED,
  DELETE_OFFICE_SUCCESS,
  DELETE_OFFICE_ERROR,
  CREATE_OFFICE_INITIALIZED,
  CREATE_OFFICE_SUCCESS,
  CREATE_OFFICE_ERROR,
  getOfficeRequestHandler,
  createOfficeRequestHandler,
  createOfficeInitialized,
  createOfficeSuccess,
  createOfficeError,
  deleteOfficeInitialized,
  deleteOfficeSuccess,
  deleteOfficeError,
  officeRequestInitializer,
  officeRequestSuccessHandler,
  officeRequestErrorHandler,
  initialState,
  officeReducer,
} from './office';

let store;

describe('OFFICE REQUEST HANDLERS', () => {
  beforeEach(() => {
    store = setupStore(initialState);
  });

  it('should dispatch a create office action', () => {
    http.post = jest
      .fn()
      .mockReturnValue(Promise.reject(new Error('something bad happened')));
    const errorActions = [
      { type: 'CREATE_OFFICE_INITIALIZED' },
      { type: 'CREATE_OFFICE_ERROR' },
    ];
    store.dispatch(createOfficeRequestHandler()).then(() => {
      expect(store.getActions()).toEqual(errorActions);
    });
  });

  it('should dispatch all offices action', () => {
    http.post = jest
      .fn()
      .mockReturnValue(Promise.reject(new Error('something bad happened')));
    const errorActions = [
      { type: 'ALL_OFFICES_INITIALIZED' },
      { type: 'ALL_OFFICES_ERROR' },
    ];
    store.dispatch(getOfficeRequestHandler()).then(() => {
      expect(store.getActions()).toEqual(errorActions);
    });
  });
});

describe('CREATE office ACTIONS', () => {
  it('should dispatch an action for create office request', () => {
    const action = {
      type: CREATE_OFFICE_INITIALIZED,
    };
    expect(createOfficeInitialized()).toEqual(action);
  });
  it('should dispatch an action for create offices success', () => {
    const response = {};
    const action = {
      type: CREATE_OFFICE_SUCCESS,
      response,
    };
    expect(createOfficeSuccess(response)).toEqual(action);
  });
  it('should dispatch an action for create offices error', () => {
    const error = '';
    const action = {
      type: CREATE_OFFICE_ERROR,
      error,
    };
    expect(createOfficeError(error)).toEqual(action);
  });
});

describe('DELETE office ACTIONS', () => {
  it('should dispatch an action for delete office request', () => {
    const action = {
      type: DELETE_OFFICE_INITIALIZED,
    };
    expect(deleteOfficeInitialized()).toEqual(action);
  });
  it('should dispatch an action for delete offices success', () => {
    const response = {};
    const action = {
      type: DELETE_OFFICE_SUCCESS,
      response,
    };
    expect(deleteOfficeSuccess(response)).toEqual(action);
  });
  it('should dispatch an action for delete offices error', () => {
    const error = '';
    const action = {
      type: DELETE_OFFICE_ERROR,
      error,
    };
    expect(deleteOfficeError(error)).toEqual(action);
  });
});

describe('FETCH office ACTIONS', () => {
  it('should dispatch an action for create office request', () => {
    const action = {
      type: ALL_OFFICES_INITIALIZED,
    };
    expect(officeRequestInitializer()).toEqual(action);
  });
  it('should dispatch an action for offices success', () => {
    const response = {};
    const action = {
      type: ALL_OFFICES_SUCCESS,
      response,
    };
    expect(officeRequestSuccessHandler(response)).toEqual(action);
  });
  it('should dispatch an action for offices error', () => {
    const error = '';
    const action = {
      type: ALL_OFFICES_ERROR,
      error,
    };
    expect(officeRequestErrorHandler(error)).toEqual(action);
  });
});

describe('office reducer test suite', () => {
  it('should return default state', () => {
    const state = officeReducer(initialState, { type: '' });
    expect(state).toEqual(initialState);
  });

  it('should return office Intialize reducer', () => {
    const action = officeRequestInitializer('offices');
    const state = officeReducer(initialState, action);
    expect(state.isLoading).toBe(true);
  });

  it('should return get office success reducer', () => {
    const action = officeRequestSuccessHandler('offices', ['random', 'data']);
    const state = officeReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.offices).toEqual(action.response);
  });

  it('should return office failure reducer', () => {
    const action = officeRequestErrorHandler('offices');
    const state = officeReducer(initialState, action);
    expect(state.isLoading).toBe(false);
    expect(state.errorResponse).toEqual(action.error);
  });
});
