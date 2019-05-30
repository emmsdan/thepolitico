/* eslint-disable no-console */
import Axios from 'axios';

import { toastbar, http } from '../../utils/helpers';

export const ALL_OFFICES_INITIALIZED = 'ALL_OFFICES_INITIALIZED';
export const ALL_OFFICES_SUCCESS = 'ALL_OFFICES_SUCCESS';
export const ALL_OFFICES_ERROR = 'ALL_OFFICES_ERROR';

export const CREATE_OFFICE_INITIALIZED = 'CREATE_OFFICE_INITIALIZED';
export const CREATE_OFFICE_SUCCESS = 'CREATE_OFFICE_SUCCESS';
export const CREATE_OFFICE_ERROR = 'CREATE_OFFICE_ERROR';

export const DELETE_OFFICE_INITIALIZED = 'DELETE_OFFICE_INITIALIZED';
export const DELETE_OFFICE_SUCCESS = 'DELETE_OFFICE_SUCCESS';
export const DELETE_OFFICE_ERROR = 'DELETE_OFFICE_ERROR';

export const initialState = {
  isLoading: false,
  errorResponse: [],
  offices: [],
};

export const getOfficeRequestHandler = officeId => {
  return async dispatch => {
    try {
      dispatch(officeRequestInitializer());
      const { data } = await Axios.get(
        `${process.env.HOST_URL}offices/${officeId}`,
      );
      dispatch(officeRequestSuccessHandler(data.data[0]));
    } catch (error) {
      toastbar.error(error.response.data.error, 'Error');
      const { data } = error.response;
      dispatch(officeRequestErrorHandler([data.error]));
    }
  };
};

export const createOfficeRequestHandler = (formData, history) => {
  return async dispatch => {
    try {
      dispatch(createOfficeInitialized());
      const { data } = await http.post('offices/', formData);
      dispatch(createOfficeSuccess(data.data[0]));
      toastbar.success('Created Politico Office Successfully');
      history.push('/account');
    } catch (error) {
      console.log(error);
      toastbar.error(error.response.data.error, 'Error');
      const { data } = error.response;
      dispatch(createOfficeError([data.error]));
    }
  };
};

export const createOfficeInitialized = () => {
  return {
    type: CREATE_OFFICE_INITIALIZED,
  };
};

export const createOfficeSuccess = response => {
  return {
    type: CREATE_OFFICE_SUCCESS,
    response,
  };
};

export const createOfficeError = error => {
  return {
    type: CREATE_OFFICE_ERROR,
    error,
  };
};

export const getOfficeDeleteRequestHandler = office => {
  return async dispatch => {
    try {
      dispatch(deleteOfficeInitialized());
      const { data } = await http.delete(
        `${process.env.HOST_URL}offices/${office.id}`,
      );
      console.log(data);
      toastbar.success(`${office.name} deleted successfully`);
      dispatch(deleteOfficeSuccess(office));
    } catch (error) {
      toastbar.error(error.response.data.error, 'Error');
      const { data } = error.response;
      dispatch(deleteOfficeError([data.error]));
    }
  };
};

export const deleteOfficeInitialized = () => {
  return {
    type: DELETE_OFFICE_INITIALIZED,
  };
};

export const deleteOfficeSuccess = response => {
  return {
    type: DELETE_OFFICE_SUCCESS,
    response,
  };
};

export const deleteOfficeError = error => {
  return {
    type: DELETE_OFFICE_ERROR,
    error,
  };
};

export const officeRequestInitializer = () => {
  return {
    type: ALL_OFFICES_INITIALIZED,
  };
};

export const officeRequestSuccessHandler = response => {
  return {
    type: ALL_OFFICES_SUCCESS,
    response,
  };
};
export const officeRequestErrorHandler = error => {
  return {
    type: ALL_OFFICES_ERROR,
    error,
  };
};

export const officeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_OFFICES_INITIALIZED:
    case CREATE_OFFICE_INITIALIZED:
    case DELETE_OFFICE_INITIALIZED:
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

    case DELETE_OFFICE_SUCCESS:
      return {
        ...state,
        offices: state.offices.filter(
          office => office.id !== action.response.id,
        ),
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
    case DELETE_OFFICE_ERROR:
      return {
        ...state,
        isLoading: false,
        errorResponse: action.error,
      };
    default:
      return state;
  }
};
