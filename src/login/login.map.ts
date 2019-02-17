import {
    ILoginErrorPayload,
    ILoginRequestPayload,
    ILoginSuccessPayload,
} from './login.action';
import {
    ILoginApiRequest,
    ILoginApiResponseError,
    ILoginApiResponseSuccess,
} from './login.api';

/**
 * Login Request Map
 */
export const toLoginApiRequest = (
    payload: ILoginRequestPayload,
): ILoginApiRequest => payload;

/**
 * Login Success Map
 */
export const fromLoginApiSuccess = (
    payload: ILoginApiResponseSuccess,
): ILoginSuccessPayload => payload;

/**
 * Login Error Map
 */
export const fromLoginApiError = (
    payload: ILoginApiResponseError,
): ILoginErrorPayload => payload;
