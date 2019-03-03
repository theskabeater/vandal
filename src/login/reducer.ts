import { Action, ActionType } from './action';
import { IError } from './model';

export interface IState {
    requesting: boolean;
    success: boolean;
    error: IError;
}

const initialState: IState = {
    requesting: false,
    success: false,
    error: {},
};

export const reducer = (
    state: IState = initialState,
    action: Action,
): IState => {
    switch (action.type) {
        case ActionType.LoginRequest:
            return { ...initialState, requesting: true };

        case ActionType.LoginSuccess:
            return { ...initialState, success: true };

        case ActionType.LoginError:
            return {
                ...initialState,
                error: action.payload,
            };

        default:
            return state;
    }
};
