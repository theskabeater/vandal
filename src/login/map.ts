import { IError as IApiError, IRequest as IApiRequest } from './api';
import { IError, IRequest } from './model';

/**
 * Login Request Map
 */
export const toApiRequest = (payload: IRequest): IApiRequest => payload;

/**
 * Login Error Map
 */
export const fromApiError = (payload: IApiError): IError => payload;
