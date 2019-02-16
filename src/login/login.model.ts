export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  id: string;
}

export interface ILoginError {
  email: string[];
}
