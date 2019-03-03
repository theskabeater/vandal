export interface IRequest {
    email: string;
    password: string;
}

export interface IError {
    email?: string[];
    password?: string[];
}
