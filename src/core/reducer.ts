import { Action, ActionType } from './action';

export interface IState {
    requestingStoredUser: boolean;
}

const initialState: IState = {
    requestingStoredUser: false,
};

export const reducer = (
    state: IState = initialState,
    action: Action,
): IState => {
    switch (action.type) {
        case ActionType.StoredUserRequest:
            return { ...initialState, requestingStoredUser: true };

        case ActionType.StoredUserSuccess:
            return {
                ...initialState,
            };

        case ActionType.StoredUserError:
            return {
                ...initialState,
            };

        default:
            return state;
    }
};
