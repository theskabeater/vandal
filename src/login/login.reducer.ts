import { Action, ActionType } from './login.action';

export interface IState {
    error: boolean;
    requesting: boolean;
    success: boolean;
    token: string;
}

const initialState: IState = {
    error: false,
    requesting: false,
    success: false,
    token: '',
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
        return { ...initialState, error: true };

    default:
        return state;
    }
};
