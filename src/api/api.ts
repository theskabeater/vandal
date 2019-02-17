import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { API_URL, HEADERS } from './api.constants';
import { IApiRequest, IApiResponse } from './api.model';

export const post = <T, R>({
    endpoint,
    body,
}: IApiRequest<T>): Observable<IApiResponse<R>> =>
    ajax.post(`${API_URL}${endpoint}`, body, HEADERS);
