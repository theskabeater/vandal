import { ActionUnion, createAction } from '../action/utils';
import { IUser } from './model';

export enum ActionType {
    UserSuccess = '[user] user.success',
}

export const Action = {
    userSuccess: (user: IUser) => createAction(ActionType.UserSuccess, user),
};

export type Action = ActionUnion<typeof Action>;
