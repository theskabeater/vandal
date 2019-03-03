import { EMPTY, Observable, of } from 'rxjs';
import { catchError, flatMap, mergeMap, switchMap } from 'rxjs/operators';

import { Action, ActionType } from './action';
import { getMessages, IError as IApiError } from './api';
import { fromApiError, fromApiResponse, toApiRequest } from './map';

export const requestMessage = (action$: Observable<Action>) =>
    action$.pipe(
        flatMap(action =>
            action.type === ActionType.MessageRequest ? of(action) : EMPTY,
        ),
        mergeMap(({ payload }) =>
            getMessages(toApiRequest(payload)).pipe(
                switchMap(({ response }) =>
                    of(Action.messageSuccess(fromApiResponse(response))),
                ),
                catchError(({ response }: { response: IApiError }) =>
                    of(Action.messageError(fromApiError(response))),
                ),
            ),
        ),
    );

export const epics = [requestMessage];
