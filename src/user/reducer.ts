import { Action, ActionType } from './action';
import { IUser } from './model';

export interface IState {
    requesting: boolean;
    success: boolean;
    user: IUser;
}

const initialState: IState = {
    requesting: false,
    success: false,
    user: {},
};

export const reducer = (
    state: IState = initialState,
    action: Action,
): IState => {
    switch (action.type) {
        case ActionType.UserSuccess:
            return { ...initialState, success: true, user: action.payload };

        default:
            return state;
    }
};
