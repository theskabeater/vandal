import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

import { API_URL, HEADERS } from './api.constants';
import { IApiRequest, IApiResponse } from './api.model';

export const post = <T, S>({
    endpoint,
    body,
}: IApiRequest<T>): Observable<IApiResponse<S>> =>
    ajax
        .post(`${API_URL}${endpoint}`, body, HEADERS)
        .pipe(map(response => response as IApiResponse<S>));
