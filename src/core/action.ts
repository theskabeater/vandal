import { createAction } from '../action/utils';
import { IUser } from '../user/model';

export enum ActionType {
    StoredUserRequest = '[core] stored.user.request',
    StoredUserSuccess = '[core] stored.user.success',
    StoredUserError = '[core] stored.user.error',
}

export const Action = {
    storedUserRequest: () => createAction(ActionType.StoredUserRequest),
    storedUserSucceess: (apiToken: IUser['apiToken']) =>
        createAction(ActionType.StoredUserSuccess, apiToken),
    storedUserError: () => createAction(ActionType.StoredUserError),
};

export type Action = ReturnType<typeof Action[keyof typeof Action]>;
