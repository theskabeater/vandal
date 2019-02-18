import { Action, ActionType, ILoginErrorPayload } from './login.action';

export interface IState {
    requesting: boolean;
    success: boolean;
    error: ILoginErrorPayload | {};
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
                error: action.payload as ILoginErrorPayload,
            };

        default:
            return state;
    }
};
