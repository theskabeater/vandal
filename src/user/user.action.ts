import { createAction } from '../action/action.utils';

export enum ActionType {
    UserResponse = 'user.response',
}

export type Action = UserResponseAction;

/**
 * User Response Action
 */
export interface IUserResponsePayload {
    id: string;
    name: string;
    email: string;
    emailVerifiedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    apiToken: string;
}
export type UserResponseAction = ReturnType<typeof userResponse>;
export const userResponse = createAction<IUserResponsePayload>(
    ActionType.UserResponse,
);
