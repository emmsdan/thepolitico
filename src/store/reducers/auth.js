import Axios from 'axios';

import { storeAuthenticationToken, toastbar } from '../../utils/helpers';

export const RESET_INITIALIZED = 'RESET_INITIALIZED';
export const RESET_SUCCESS = 'LOGIN_SUCCESS';
export const RESET_ERROR = 'LOGIN_ERROR';
export const LOGIN_INITIALIZED = 'LOGIN_INITIALIZED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const REGISTRATION_INITIALIZED = 'REGISTRATION_INITIALIZED';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';

export const initialState = {
  isLoading: false,
  errorResponse: [],
  successResponse: { status: '' },
  loggedInUser: {},
};

export const authenticationRequestHandler = (
  userData,
  actionurl,
  history,
  redirectTo,
) => {
  return async dispatch => {
    try {
      dispatch(authRequestInitializer(actionurl));
      const { data } = await Axios.post(
        `${process.env.HOST_URL}auth/${actionurl}`,
        userData,
      );
      actionurl !== 'reset' ? storeAuthenticationToken(data.data[0].token) : '';
      dispatch(authRequestSuccessHandler(actionurl, data.data[0]));
      toastbar.success(data.data[0].message);
      history.push(redirectTo);
    } catch (error) {
      toastbar.error(error.response.data.error, 'Error');
      const { data } = error.response;
      dispatch(authRequestErrorHandler(actionurl, [data.error]));
    }
  };
};

export const authRequestInitializer = actionType => {
  switch (actionType) {
    case 'login':
      return {
        type: LOGIN_INITIALIZED,
      };

    case 'reset':
      return {
        type: RESET_INITIALIZED,
      };

    case 'signup':
      return {
        type: REGISTRATION_INITIALIZED,
      };

    default:
      return actionType;
  }
};

export const authRequestSuccessHandler = (actionType, response) => {
  switch (actionType) {
    case 'login':
      return {
        type: LOGIN_SUCCESS,
        ...response,
      };

    case 'reset':
      return {
        type: RESET_SUCCESS,
        ...response,
      };

    case 'signup':
      return {
        type: REGISTRATION_SUCCESS,
        ...response,
      };
    default:
      return actionType;
  }
};
export const authRequestErrorHandler = (actionType, error) => {
  switch (actionType) {
    case 'login':
      return {
        type: LOGIN_ERROR,
        error,
      };

    case 'reset':
      return {
        type: RESET_ERROR,
        error,
      };

    case 'signup':
      return {
        type: REGISTRATION_ERROR,
        error,
      };
    default:
      return actionType;
  }
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_INITIALIZED:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        successResponse: action.response,
        isLoading: false,
        errorResponse: [],
      };

    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };
    default:
      return state;
  }
};
