import { IAction } from './action.model';

export const createAction = <T>(type: string) => (payload: T): IAction<T> => ({
  payload,
  type,
});
