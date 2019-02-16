import { post } from '../ajax/ajax';
import { ILoginRequest, ILoginResponse } from './login.model';

export const login = (body: ILoginRequest) =>
  post<ILoginRequest, ILoginResponse>({
    body,
    url: 'http://206.81.12.207/api/login',
  });
