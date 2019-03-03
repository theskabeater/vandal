import { Action, ActionType } from './action';
import { IError, IMessage } from './model';

export interface IState {
    requesting: boolean;
    success: boolean;
    messages: IMessage[];
    error: IError;
}

const initialState: IState = {
    requesting: false,
    success: false,
    error: {},
    messages: [],
};

export const reducer = (
    state: IState = initialState,
    action: Action,
): IState => {
    switch (action.type) {
        case ActionType.MessageRequest:
            return { ...initialState, requesting: true };

        case ActionType.MessageSuccess:
            return {
                ...initialState,
                success: true,
                messages: action.payload,
            };

        case ActionType.MessageError:
            return {
                ...initialState,
                error: action.payload,
            };

        default:
            return state;
    }
};
