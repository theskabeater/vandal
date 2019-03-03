import { api } from '../api/api';
import { IError as IApiError } from '../api/model';

export interface IRequest {
    api_token: string;
}

export interface IMessage {
    id: string;
    text: string;
    created_at: Date;
    updated_at: Date;
}

export interface IError extends IApiError {
    errors: {};
}

export const getMessages = (body: IRequest) =>
    api.get<IRequest, IMessage[]>({
        body,
        endpoint: '/messages',
    });
