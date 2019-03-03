import {
    IError as IApiError,
    IMessage as IApiMessage,
    IRequest as IApiRequest,
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

export const fromApiResponse = (messages: IApiMessage[]): IMessage[] =>
    messages.map(message => ({
        id: message.id,
        text: message.text,
        createdAt: message.created_at,
        updatedAt: message.updated_at,
    }));

/**
 * Message Error Map
 */
export const fromApiError = (apiError: IApiError): IError => ({
    message: apiError.message,
    errors: apiError.errors,
});
