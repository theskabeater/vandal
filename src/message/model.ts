import { IError as ICoreError } from '../core/model';

export interface IRequest {
    apiToken: string;
}

export interface IMessage {
    id: string;
    text: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IError extends ICoreError {
    errors: {};
}
