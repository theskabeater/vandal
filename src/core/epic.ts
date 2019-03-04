import { EMPTY, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Action as ActionAction } from '../action/action';
import {
    Action as UserAction,
    ActionType as UserActionType,
} from '../user/action';
import { Action, ActionType } from './action';
import { getUserFromDevice, saveUserToDevice } from './utils';

export const userSuccess = (action$: Observable<UserAction>) =>
    action$.pipe(
        switchMap(action =>
            action.type === UserActionType.UserSuccess ? of(action) : EMPTY,
        ),
        tap(({ payload: user }) => saveUserToDevice(user)),
        switchMap(() => of(ActionAction.noOp())),
    );

export const requestStoredUser = (action$: Observable<Action>) =>
    action$.pipe(
        switchMap(action =>
            action.type === ActionType.StoredUserRequest ? of(action) : EMPTY,
        ),
        switchMap(() =>
            getUserFromDevice().pipe(
                switchMap(apiToken => {
                    if (apiToken) {
                        return of(Action.storedUserSucceess(apiToken));
                    }
                    return of(Action.storedUserError());
                }),
            ),
        ),
    );
export const epics = [userSuccess, requestStoredUser];
