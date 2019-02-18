import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { epics as loginEpic } from '../login/login.epic';

export const epic = combineEpics(...loginEpic);
export const epicMiddleware = createEpicMiddleware();
