import { combineReducers } from 'redux';
import { authReducer } from './reducers/auth';
import { partyReducer } from './reducers/party';
import { officeReducer } from './reducers/office';

export default combineReducers({
  auth: authReducer,
  parties: partyReducer,
  offices: officeReducer,
});
