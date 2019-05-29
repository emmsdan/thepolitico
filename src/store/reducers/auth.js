import Axios from 'axios';

import { storeAuthenticationToken, toastbar } from '../../utils/helpers';

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

export const userRegistrationHandler = (userData, history, redirectTo) => {
  return async dispatch => {
    try {
      dispatch(registrationInitializer());
      const { data } = await Axios.post(
        `${process.env.HOST_URL}auth/signup`,
        userData,
      );
      // eslint-disable-next-line no-console
      console.log(data);
      storeAuthenticationToken(data.data[0].token);
      dispatch(registrationSuccessHandler(data.data[0]));
      toastbar.success(data.data[0].message);
      history.push(redirectTo);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.response);
      toastbar.error(error.response.data.error, 'Error');
      const { data } = error.response;
      dispatch(registrationErrorHandler([data.error]));
    }
  };
};

export const userLoginHandler = (userData, history, redirectTo) => {
  return async dispatch => {
    try {
      dispatch(loginInitializer());
      const { data } = await Axios.post(
        `${process.env.HOST_URL}auth/login`,
        userData,
      );
      storeAuthenticationToken(data.data[0].token);
      dispatch(loginSuccessHandler(data.data[0]));
      toastbar.success(data.data[0].message);
      history.push(redirectTo);
    } catch (error) {
      toastbar.error(error.response.data.error, 'Error');
      const { data } = error.response;
      dispatch(loginErrorHandler([data.error]));
    }
  };
};

export const registrationInitializer = () => ({
  type: REGISTRATION_INITIALIZED,
});

export const registrationSuccessHandler = response => ({
  type: REGISTRATION_SUCCESS,
  ...response,
});

export const registrationErrorHandler = error => ({
  type: REGISTRATION_ERROR,
  error,
});

export const loginInitializer = () => ({
  type: LOGIN_INITIALIZED,
});

export const loginSuccessHandler = response => ({
  type: LOGIN_SUCCESS,
  ...response,
});

export const loginErrorHandler = error => ({
  type: LOGIN_ERROR,
  error,
});

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
