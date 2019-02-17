import { IAction } from '../action/action.model';
import { createAction } from '../action/action.utils';

export enum ActionType {
    LoginRequest = 'login.request',
    LoginSuccess = 'login.success',
    LoginError = 'login.error',
}

export type Action = LoginRequestAction | LoginSuccessAction | LoginErrorAction;

/**
 * Login Request Request
 */
export interface ILoginRequestPayload {
    email: string;
    password: string;
}
export type LoginRequestAction = ReturnType<typeof loginRequest>;
export const loginRequest = createAction<ILoginRequestPayload>(
    ActionType.LoginRequest,
);

/**
 * Login Success Action
 */
export interface ILoginSuccessPayload {
    id: string;
}
export type LoginSuccessAction = IAction<ILoginSuccessPayload>;
export const loginSuccess = createAction<ILoginSuccessPayload>(
    ActionType.LoginSuccess,
);

/**
 * Login Error Action
 */
export interface ILoginErrorPayload {
    email: string[];
}
export type LoginErrorAction = IAction<ILoginErrorPayload>;
export const loginError = createAction<ILoginErrorPayload>(
    ActionType.LoginError,
);
