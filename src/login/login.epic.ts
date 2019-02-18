import { ofType } from 'redux-observable';
import { concat, Observable, of } from 'rxjs';
import { catchError, mergeMap, switchMap, tap } from 'rxjs/operators';

import { noOp } from '../action/action';
import { userResponse } from '../user/user.action';
import { IUserApiResponse } from '../user/user.api';
import { fromUserApiResponse } from '../user/user.map';
import {
    ActionType,
    loginError,
    LoginRequestAction,
    loginSuccess,
} from './login.action';
import { ILoginApiResponseError, login } from './login.api';
import { fromLoginApiError, toLoginApiRequest } from './login.map';

export const requestLogin = (action$: Observable<LoginRequestAction>) =>
    action$.pipe(
        ofType(ActionType.LoginRequest),
        mergeMap(({ payload }) => {
            if (payload) {
                return login(toLoginApiRequest(payload)).pipe(
                    switchMap(({ response }) =>
                        concat(
                            of(loginSuccess()),
                            of(
                                userResponse(
                                    fromUserApiResponse(
                                        response as IUserApiResponse,
                                    ),
                                ),
                            ),
                        ),
                    ),
                    catchError(
                        ({ response }: { response: ILoginApiResponseError }) =>
                            of(loginError(fromLoginApiError(response))),
                    ),
                );
            }
            return of(noOp());
        }),
    );

export const epics = [requestLogin];
