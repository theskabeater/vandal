import { ILoginErrorPayload, ILoginRequestPayload } from './login.action';
import { ILoginApiRequest, ILoginApiResponseError } from './login.api';

/**
 * Login Request Map
 */
export const toLoginApiRequest = (
    payload: ILoginRequestPayload,
): ILoginApiRequest => payload;

/**
 * Login Error Map
 */
export const fromLoginApiError = (
    payload: ILoginApiResponseError,
): ILoginErrorPayload => payload;
