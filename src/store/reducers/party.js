/* eslint-disable no-console */
import Axios from 'axios';

import { toastbar, http } from '../../utils/helpers';

export const ALL_PARTIES_INITIALIZED = 'ALL_PARTIES_INITIALIZED';
export const ALL_PARTIES_SUCCESS = 'ALL_PARTIES_SUCCESS';
export const ALL_PARTIES_ERROR = 'ALL_PARTIES_ERROR';

export const DELETE_PARTY_INITIALIZED = 'DELETE_PARTY_INITIALIZED';
export const DELETE_PARTY_SUCCESS = 'DELETE_PARTY_SUCCESS';
export const DELETE_PARTY_ERROR = 'DELETE_PARTY_ERROR';

export const initialState = {
  isLoading: false,
  errorResponse: [],
  parties: [],
};

export const getPartyRequestHandler = (partyId, actionType) => {
  return async dispatch => {
    try {
      dispatch(partyRequestInitializer(actionType));
      const { data } = await Axios.get(
        `${process.env.HOST_URL}parties/${partyId}`,
      );
      dispatch(partyRequestSuccessHandler(actionType, data.data[0]));
    } catch (error) {
      toastbar.error(error.response.data.error, 'Error');
      const { data } = error.response;
      dispatch(partyRequestErrorHandler(actionType, [data.error]));
    }
  };
};

export const getPartyDeleteRequestHandler = party => {
  return async dispatch => {
    try {
      dispatch(deletePartyInitialized());
      const { data } = await http.delete(
        `${process.env.HOST_URL}parties/${party.id}`,
      );
      toastbar.success(`${party.name} deleted successfully`, 'success');
      dispatch(deletePartySuccess(data.data[0]));
      location.reload();
    } catch (error) {
      console.log(error);
      toastbar.error(error.response.data.error, 'Error');
      const { data } = error.response;
      dispatch(deletePartyError([data.error]));
    }
  };
};

export const deletePartyInitialized = () => {
  return {
    type: DELETE_PARTY_INITIALIZED,
  };
};

export const deletePartySuccess = response => {
  return {
    type: DELETE_PARTY_SUCCESS,
    response,
  };
};

export const deletePartyError = error => {
  return {
    type: DELETE_PARTY_ERROR,
    error,
  };
};

export const partyRequestInitializer = actionType => {
  switch (actionType) {
    case 'parties':
      return {
        type: ALL_PARTIES_INITIALIZED,
      };

    default:
      return actionType;
  }
};

export const partyRequestSuccessHandler = (actionType, response) => {
  switch (actionType) {
    case 'parties':
      return {
        type: ALL_PARTIES_SUCCESS,
        response,
      };
    default:
      return actionType;
  }
};
export const partyRequestErrorHandler = (actionType, error) => {
  switch (actionType) {
    case 'parties':
      return {
        type: ALL_PARTIES_ERROR,
        error,
      };
    default:
      return actionType;
  }
};

export const partyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PARTIES_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case ALL_PARTIES_SUCCESS:
      return {
        ...state,
        parties: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case ALL_PARTIES_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };
    default:
      return state;
  }
};
