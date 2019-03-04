import { EMPTY, Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { Action, ActionType } from './action';
import { getMessages, IError as IApiError } from './api';
import { fromApiError, fromApiResponse, toApiRequest } from './map';

export const requestMessage = (action$: Observable<Action>) =>
    action$.pipe(
        switchMap(action =>
            action.type === ActionType.MessageRequest ? of(action) : EMPTY,
        ),
        switchMap(({ payload: request }) =>
            getMessages(toApiRequest(request)).pipe(
                switchMap(({ response: apiResponse }) =>
                    of(Action.messageSuccess(fromApiResponse(apiResponse))),
                ),
                catchError(({ response: apiError }: { response: IApiError }) =>
                    of(Action.messageError(fromApiError(apiError))),
                ),
            ),
        ),
    );

export const epics = [requestMessage];
