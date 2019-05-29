import Axios from 'axios';

import { toastbar } from '../../utils/helpers';

export const ALL_OFFICES_INITIALIZED = 'ALL_OFFICES_INITIALIZED';
export const ALL_OFFICES_SUCCESS = 'ALL_OFFICES_SUCCESS';
export const ALL_OFFICES_ERROR = 'ALL_OFFICES_ERROR';

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

    case ALL_OFFICES_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };
    default:
      return state;
  }
};
