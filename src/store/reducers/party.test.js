import {
  ALL_PARTIES_INITIALIZED,
  ALL_PARTIES_SUCCESS,
  ALL_PARTIES_ERROR,
  partyRequestSuccessHandler,
  partyRequestErrorHandler,
  partyRequestInitializer,
  initialState,
  partyReducer,
} from './party';

describe('CREATE PARTY ACTIONS', () => {
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

describe('article reducer test suite', () => {
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
