import { Action, ActionType, IUserResponsePayload } from './user.action';

export type IState = IUserResponsePayload | {};
const initialState: IState = {};

export const reducer = (
    state: IState = initialState,
    action: Action,
): IState => {
    switch (action.type) {
        case ActionType.UserResponse:
            return { ...action.payload };

        default:
            return state;
    }
};
