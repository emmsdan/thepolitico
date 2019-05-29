import { combineReducers } from 'redux';
import { authReducer } from './reducers/auth';
import { partyReducer } from './reducers/party';

export default combineReducers({ auth: authReducer, parties: partyReducer });
