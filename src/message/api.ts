import { api } from '../api/api';
import { Error } from '../api/model';

export interface IRequest {
    api_token: string;
}

export interface IResponse {
    messages: Array<{
        id: string;
        text: string;
        created_at: Date;
        updated_at: Date;
    }>;
}

export interface IError {
    api_token: Error;
}

export const getMessages = (body: IRequest) =>
    api.get<IRequest, IResponse>({
        body,
        endpoint: '/messages',
    });
