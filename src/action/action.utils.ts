import { IAction } from '.';

export const createAction = <T>(type: string) => (payload: T): IAction<T> => ({
  payload,
  type,
});
