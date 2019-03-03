import { IAction, IActionWithPayload } from './model';

export function createAction<T extends string>(type: T): IAction<T>;
export function createAction<T extends string, P>(
    type: T,
    payload: P,
): IActionWithPayload<T, P>;
export function createAction<T, P>(type: T, payload?: P) {
    return payload === undefined ? { type } : { type, payload };
}
