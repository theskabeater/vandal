import { combineReducers } from 'redux';

import { reducer as LoginReducer } from '../login/login.reducer';

export const reducer = combineReducers({
  login: LoginReducer,
});
