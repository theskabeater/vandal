import { IError as IApiError, IRequest as IApiRequest } from './api';
import { IError, IRequest } from './model';

/**
 * Login Request Map
 */
export const toApiRequest = (request: IRequest): IApiRequest => request;

/**
 * Login Error Map
 */
export const fromApiError = (apiError: IApiError): IError => ({
    message: apiError.message,
    errors: apiError.errors,
});
