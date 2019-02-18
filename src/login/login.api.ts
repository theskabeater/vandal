import { post } from '../api/api';
import { IUserApiResponse } from '../user/user.api';

export interface ILoginApiRequest {
    email: string;
    password: string;
}

export interface ILoginApiResponseError {
    email: string[];
    password: string[];
}

export const login = (body: ILoginApiRequest) =>
    post<ILoginApiRequest, IUserApiResponse>({
        body,
        endpoint: '/login',
    });
