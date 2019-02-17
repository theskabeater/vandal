import { ofType } from 'redux-observable';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {
    ActionType,
    loginError,
    LoginRequestAction,
    loginSuccess,
} from './login.action';
import {
    ILoginApiResponseError,
    ILoginApiResponseSuccess,
    login,
} from './login.api';
import {
    fromLoginApiError,
    fromLoginApiSuccess,
    toLoginApiRequest,
} from './login.map';

export const requestLogin = (action$: Observable<LoginRequestAction>) =>
    action$.pipe(
        ofType(ActionType.LoginRequest),
        mergeMap(({ payload }) =>
            login(toLoginApiRequest(payload)).pipe(
                map(({ response }) =>
                    loginSuccess(
                        fromLoginApiSuccess(
                            response as ILoginApiResponseSuccess,
                        ),
                    ),
                ),
                catchError(
                    ({ response }: { response: ILoginApiResponseError }) =>
                        of(loginError(fromLoginApiError(response))),
                ),
            ),
        ),
    );

export const epics = [requestLogin];
