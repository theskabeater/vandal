import { AjaxError, AjaxResponse } from 'rxjs/ajax';

export interface IApiRequest<T> {
    endpoint: string;
    body: T;
}

export interface IApiResponse<T> extends AjaxResponse {
    response: T;
}

export interface IApiError<T> extends AjaxError {
    response: {
        message: string;
        errors: T;
    };
}
