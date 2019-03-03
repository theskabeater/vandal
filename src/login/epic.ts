import { concat, EMPTY, Observable, of } from 'rxjs';
import { catchError, flatMap, mergeMap, switchMap } from 'rxjs/operators';

import { Action as UserAction } from '../user/action';
import { fromApiResponse } from '../user/map';
import { Action, ActionType } from './action';
import { IError, login } from './api';
import { fromApiError, toApiRequest } from './map';

export const requestLogin = (action$: Observable<Action>) =>
    action$.pipe(
        flatMap(action =>
            action.type === ActionType.LoginRequest ? of(action) : EMPTY,
        ),
        mergeMap(({ payload }) =>
            login(toApiRequest(payload)).pipe(
                switchMap(({ response }) =>
                    concat(
                        of(Action.loginSuccess()),
                        of(UserAction.userSuccess(fromApiResponse(response))),
                    ),
                ),
                catchError(({ response }: { response: IError }) =>
                    of(Action.loginError(fromApiError(response))),
                ),
            ),
        ),
    );

export const epics = [requestLogin];
