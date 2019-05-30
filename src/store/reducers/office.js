/* eslint-disable no-console */
import Axios from 'axios';

import { toastbar, http } from '../../utils/helpers';

export const ALL_OFFICES_INITIALIZED = 'ALL_OFFICES_INITIALIZED';
export const ALL_OFFICES_SUCCESS = 'ALL_OFFICES_SUCCESS';
export const ALL_OFFICES_ERROR = 'ALL_OFFICES_ERROR';

export const CREATE_OFFICE_INITIALIZED = 'CREATE_OFFICE_INITIALIZED';
export const CREATE_OFFICE_SUCCESS = 'CREATE_OFFICE_SUCCESS';
export const CREATE_OFFICE_ERROR = 'CREATE_OFFICE_ERROR';

export const initialState = {
  isLoading: false,
  errorResponse: [],
  offices: [],
};

export const getOfficeRequestHandler = (officeId, actionType) => {
  return async dispatch => {
    try {
      dispatch(officeRequestInitializer(actionType));
      const { data } = await Axios.get(
        `${process.env.HOST_URL}offices/${officeId}`,
      );
      dispatch(officeRequestSuccessHandler(actionType, data.data[0]));
    } catch (error) {
      toastbar.error(error.response.data.error, 'Error');
      const { data } = error.response;
      dispatch(officeRequestErrorHandler(actionType, [data.error]));
    }
  };
};

export const createOfficeRequestHandler = (formData, history) => {
  return async dispatch => {
    try {
      dispatch(createPartyInitialized());
      const { data } = await http.post('offices/', formData);
      dispatch(createPartySuccess(data.data[0]));
      toastbar.success('Politico Office Successfully');
      history.push('/account');
    } catch (error) {
      console.log(error);
      toastbar.error(error.response.data.error, 'Error');
      const { data } = error.response;
      dispatch(createPartyError([data.error]));
    }
  };
};

export const createPartyInitialized = () => {
  return {
    type: CREATE_OFFICE_INITIALIZED,
  };
};

export const createPartySuccess = response => {
  return {
    type: CREATE_OFFICE_SUCCESS,
    response,
  };
};

export const createPartyError = error => {
  return {
    type: CREATE_OFFICE_ERROR,
    error,
  };
};

export const officeRequestInitializer = actionType => {
  switch (actionType) {
    case 'offices':
      return {
        type: ALL_OFFICES_INITIALIZED,
      };

    default:
      return actionType;
  }
};

export const officeRequestSuccessHandler = (actionType, response) => {
  switch (actionType) {
    case 'offices':
      return {
        type: ALL_OFFICES_SUCCESS,
        response,
      };
    default:
      return actionType;
  }
};
export const officeRequestErrorHandler = (actionType, error) => {
  switch (actionType) {
    case 'offices':
      return {
        type: ALL_OFFICES_ERROR,
        error,
      };
    default:
      return actionType;
  }
};

export const officeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_OFFICES_INITIALIZED:
    case CREATE_OFFICE_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case ALL_OFFICES_SUCCESS:
      return {
        ...state,
        offices: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case CREATE_OFFICE_SUCCESS:
      return {
        ...state,
        offices: [...state.offices, action.response],
        isLoading: false,
        errorResponse: [],
      };

    case ALL_OFFICES_ERROR:
    case CREATE_OFFICE_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };
    default:
      return state;
  }
};
