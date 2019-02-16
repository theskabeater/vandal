import { ILoginRequest, ILoginResponse } from '.';
import { post } from '../ajax';

export const login = (body: ILoginRequest) =>
  post<ILoginRequest, ILoginResponse>({
    body,
    url: 'http://206.81.12.207/api/login',
  });
