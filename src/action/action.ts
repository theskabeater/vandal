import { IAction } from '../action/action.model';
import { createAction } from '../action/action.utils';

export enum ActionType {
    NoOp = 'action.NoOp',
}

export type Action = NoOpAction;

/**
 * NoOp Action
 */
export type NoOpAction = ReturnType<typeof noOp>;
export const noOp = createAction(ActionType.NoOp);
