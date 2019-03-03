import {
    IError as IApiError,
    IRequest as IApiRequest,
    IResponse as IApiResonse,
} from './api';
import { IError, IMessage, IRequest } from './model';

/**
 * Message Request Map
 */

export const toApiRequest = (request: IRequest): IApiRequest => ({
    api_token: request.apiToken,
});

/**
 * Message Response Map
 */

export const fromApiResponse = (response: IApiResonse): IMessage[] =>
    response.messages.map(message => ({
        id: message.id,
        text: message.text,
        createdAt: message.created_at,
        updatedAt: message.updated_at,
    }));

/**
 * Message Error Map
 */
export const fromApiError = (error: IApiError): IError => ({
    apiToken: error.api_token,
});
