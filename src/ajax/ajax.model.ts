import { AjaxError, AjaxRequest, AjaxResponse } from 'rxjs/ajax';

export interface IAjaxRequest<T> extends AjaxRequest {
  url: string;
  body: T;
}

export interface IAjaxResponse<T> extends AjaxResponse {
  response: T;
}

export interface IAjaxError<T> extends AjaxError {
  response: {
    message: string;
    errors: T;
  };
}
