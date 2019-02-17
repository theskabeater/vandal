import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';

import { API_URL, HEADERS } from './api.constants';
import { IApiRequest, IApiResponse } from './api.model';

export const post = <T, S, E>({
    endpoint,
    body,
}: IApiRequest<T>): Observable<IApiResponse<S, E>> =>
    ajax.post(`${API_URL}${endpoint}`, body, HEADERS).pipe(
        map(ajaxResponse => {
            const error = ajaxResponse.status === 200;
            const response = {
                ...ajaxResponse,
                error,
            };
            return response as IApiResponse<S, E>;
        }),
    );
