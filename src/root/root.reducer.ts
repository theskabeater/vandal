import { combineReducers } from 'redux';

import { reducer as LoginReducer } from '../login/login.reducer';
import { reducer as UserReducer } from '../user/user.reducer';

export const reducer = combineReducers({
    login: LoginReducer,
    user: UserReducer,
});
