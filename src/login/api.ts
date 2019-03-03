import { api } from '../api/api';
import { IError as IApiError } from '../api/model';
import { IResponse as IUserResponse } from '../user/api';

export interface IRequest {
    email: string;
    password: string;
}

export interface IError extends IApiError {
    errors: {
        email: string[];
        password: string[];
    };
}

export const login = (body: IRequest) =>
    api.post<IRequest, IUserResponse>({
        body,
        endpoint: '/login',
    });
