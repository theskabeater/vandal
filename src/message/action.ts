import { createAction } from '../action/utils';
import { IError, IMessage, IRequest } from './model';

export enum ActionType {
    MessageRequest = 'message.request',
    MessageSuccess = 'message.success',
    MessageError = 'message.error',
}

export const Action = {
    messageRequest: (request: IRequest) =>
        createAction(ActionType.MessageRequest, request),
    messageSuccess: (messages: IMessage[]) =>
        createAction(ActionType.MessageSuccess, messages),
    messageError: (error: IError) =>
        createAction(ActionType.MessageError, error),
};

export type Action = ReturnType<typeof Action[keyof typeof Action]>;