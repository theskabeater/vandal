import { AjaxResponse } from 'rxjs/ajax';

export interface IRequest<T> {
    endpoint: string;
    body: T;
}

export interface IResponse<T> extends AjaxResponse {
    response: T;
}

export interface IError {
    message: string;
    errors: {
        [key: string]: string[] | undefined;
    };
}
