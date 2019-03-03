import { isEmpty } from 'lodash';
import { Observable } from 'rxjs';
import { ajax as rxAjax } from 'rxjs/ajax';

import { API_URL, HEADERS } from './constants';
import { IRequest, IResponse } from './model';

const ajax = <T, R>(
    method: keyof typeof rxAjax,
    { endpoint, body }: IRequest<T>,
): Observable<IResponse<R>> => {
    const url = `${API_URL}${endpoint}`;

    if (['get', 'getJSON', 'delete'].includes(method)) {
        const params = !isEmpty(body)
            ? `?${Object.entries(body)
                  .map(([key, val]) => `${key}=${val}`)
                  .join('&')}`
            : '';
        return rxAjax[method](`${url}${params}`, HEADERS);
    }

    return rxAjax[method](url, body, HEADERS);
};

export const api = {
    get: <T, R>(params: IRequest<T>) => ajax<T, R>('get', params),
    post: <T, R>(params: IRequest<T>) => ajax<T, R>('post', params),
    put: <T, R>(params: IRequest<T>) => ajax<T, R>('put', params),
    patch: <T, R>(params: IRequest<T>) => ajax<T, R>('patch', params),
    delete: <T, R>(params: IRequest<T>) => ajax<T, R>('delete', params),
    getJSON: <T, R>(params: IRequest<T>) => ajax<T, R>('getJSON', params),
};
