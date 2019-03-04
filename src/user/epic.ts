import { EMPTY, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {
    Action as CoreAction,
    ActionType as CoreActionType,
} from '../core/action';
import {
    Action as LoginAction,
    ActionType as LoginActionType,
} from '../login/action';
import { Action } from './action';

export const loginSuccess = (action$: Observable<LoginAction>) =>
    action$.pipe(
        switchMap(action =>
            action.type === LoginActionType.LoginSuccess ? of(action) : EMPTY,
        ),
        switchMap(({ payload: user }) => of(Action.userSuccess(user))),
    );

export const storedUserSuccess = (action$: Observable<CoreAction>) =>
    action$.pipe(
        switchMap(action =>
            action.type === CoreActionType.StoredUserSuccess
                ? of(action)
                : EMPTY,
        ),
        switchMap(({ payload: apiToken }) =>
            of(Action.userSuccess({ apiToken })),
        ),
    );

export const epics = [loginSuccess, storedUserSuccess];
