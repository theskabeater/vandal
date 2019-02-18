import { createAction } from '../action/action.utils';

export enum ActionType {
    LoginRequest = 'login.request',
    LoginSuccess = 'login.success',
    LoginError = 'login.error',
}

export type Action = LoginRequestAction | LoginSuccessAction | LoginErrorAction;

/**
 * Login Request Action
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
export type LoginSuccessAction = ReturnType<typeof loginSuccess>;
export const loginSuccess = createAction(ActionType.LoginSuccess);

/**
 * Login Error Action
 */
export interface ILoginErrorPayload {
    email: string[];
    password: string[];
}
export type LoginErrorAction = ReturnType<typeof loginError>;
export const loginError = createAction<ILoginErrorPayload>(
    ActionType.LoginError,
);
