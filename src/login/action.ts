import { ActionUnion, createAction } from '../action/utils';
import { IUser } from '../user/model';
import { IError, IRequest } from './model';

export enum ActionType {
    LoginRequest = '[login] login.request',
    LoginSuccess = '[login] login.success',
    LoginError = '[login] login.error',
}

export const Action = {
    loginRequest: (request: IRequest) =>
        createAction(ActionType.LoginRequest, request),
    loginSuccess: (user: IUser) => createAction(ActionType.LoginSuccess, user),
    loginError: (error: IError) => createAction(ActionType.LoginError, error),
};

export type Action = ActionUnion<typeof Action>;
