import { combineReducers } from 'redux';

import {
    IState as ILoginState,
    reducer as LoginReducer,
} from '../login/reducer';
import {
    IState as IMessageState,
    reducer as MessageReducer,
} from '../message/reducer';
import { IState as IUserState, reducer as UserReducer } from '../user/reducer';

export interface IState {
    login: ILoginState;
    user: IUserState;
    message: IMessageState;
}

export const reducer = combineReducers<IState>({
    login: LoginReducer,
    user: UserReducer,
    message: MessageReducer,
});
