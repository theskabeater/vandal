import { IError as ICoreError } from '../core/model';

export interface IRequest {
    email: string;
    password: string;
}

export interface IError extends ICoreError {
    errors: {
        email?: string[];
        password?: string[];
    };
}
