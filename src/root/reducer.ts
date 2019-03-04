import { combineReducers } from 'redux';

import { IState as ICoreState, reducer as CoreReducer } from '../core/reducer';
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
    core: ICoreState;
    login: ILoginState;
    user: IUserState;
    message: IMessageState;
}

export const reducer = combineReducers<IState>({
    core: CoreReducer,
    login: LoginReducer,
    user: UserReducer,
    message: MessageReducer,
});
