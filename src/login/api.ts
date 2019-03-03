import { api } from '../api/api';
import { IResponse as IUserResponse } from '../user/api';

export interface IRequest {
    email: string;
    password: string;
}

export interface IError {
    email: string[];
    password: string[];
}

export const login = (body: IRequest) =>
    api.post<IRequest, IUserResponse>({
        body,
        endpoint: '/login',
    });
