import { combineReducers } from 'redux';

import { reducer as LoginReducer } from '../login';

export const reducer = combineReducers({
  login: LoginReducer,
});
