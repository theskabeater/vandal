import { ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  ActionType,
  login,
  loginError,
  LoginRequestAction,
  loginSuccess,
} from '.';

export const requestLogin = (action$: Observable<LoginRequestAction>) =>
  action$.pipe(
    ofType(ActionType.LoginRequest),
    switchMap(({ payload }) => login(payload)),
    map(({ response }) => loginSuccess(response)),
    catchError(({ response }) => of(loginError(response))),
  );

export const epics = [requestLogin];
