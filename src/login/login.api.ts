import { post } from '../api/api';

export interface ILoginApiRequest {
    email: string;
    password: string;
}

export interface ILoginApiResponseSuccess {
    id: string;
}

export interface ILoginApiResponseError {
    email: string[];
}

export const login = (body: ILoginApiRequest) =>
    post<ILoginApiRequest, ILoginApiResponseSuccess, ILoginApiResponseError>({
        body,
        endpoint: '/login',
    });
