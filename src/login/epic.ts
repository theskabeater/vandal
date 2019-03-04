import { EMPTY, Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { fromApiResponse as userFromApiResponse } from '../user/map';
import { Action, ActionType } from './action';
import { IError, login } from './api';
import { fromApiError, toApiRequest } from './map';

export const requestLogin = (action$: Observable<Action>) =>
    action$.pipe(
        switchMap(action =>
            action.type === ActionType.LoginRequest ? of(action) : EMPTY,
        ),
        switchMap(({ payload: request }) =>
            login(toApiRequest(request)).pipe(
                switchMap(({ response: apiResponse }) =>
                    of(Action.loginSuccess(userFromApiResponse(apiResponse))),
                ),
                catchError(({ response: apiError }: { response: IError }) =>
                    of(Action.loginError(fromApiError(apiError))),
                ),
            ),
        ),
    );

export const epics = [requestLogin];
