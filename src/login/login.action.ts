import { createAction } from '../action/action.utils';
import { ILoginError, ILoginRequest, ILoginResponse } from './login.model';

export enum ActionType {
  LoginRequest = 'login.request',
  LoginSuccess = 'login.success',
  LoginError = 'login.error',
}

export const loginRequest = createAction<ILoginRequest>(
  ActionType.LoginRequest,
);
export const loginSuccess = createAction<ILoginResponse>(
  ActionType.LoginSuccess,
);
export const loginError = createAction<ILoginError>(ActionType.LoginError);

export type LoginRequestAction = ReturnType<typeof loginRequest>;
export type LoginSuccessAction = ReturnType<typeof loginSuccess>;
export type LoginErrorAction = ReturnType<typeof loginError>;

export type Action = LoginRequestAction | LoginSuccessAction | LoginErrorAction;
