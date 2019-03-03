import { AjaxResponse } from 'rxjs/ajax';

export interface IRequest<T> {
    endpoint: string;
    body: T;
}

export interface IResponse<T> extends AjaxResponse {
    response: T;
}

export type Error = string[];
