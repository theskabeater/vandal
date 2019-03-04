import { createAction } from '../action/utils';

export enum ActionType {
    NoOp = '[action] no.op',
}

export const Action = {
    noOp: () => createAction(ActionType.NoOp),
};

export type Action = ReturnType<typeof Action[keyof typeof Action]>;
