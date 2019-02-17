import { AjaxError, AjaxResponse } from 'rxjs/ajax';

export interface IApiRequest<T> {
    endpoint: string;
    body: T;
}

export interface IApiResponse<T, E> extends AjaxResponse {
    error: boolean;
    response: T | IApiError<E>;
}

export interface IApiError<T> extends AjaxError {
    response: {
        message: string;
        errors: T;
    };
}
