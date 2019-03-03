import { createAction } from '../action/utils';
import { IUser } from './model';

export enum ActionType {
    UserSuccess = 'user.success',
}

export const Action = {
    userSuccess: (user: IUser) => createAction(ActionType.UserSuccess, user),
};

export type Action = ReturnType<typeof Action[keyof typeof Action]>;
