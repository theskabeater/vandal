import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { epics as loginEpic } from '../login/epic';
import { epics as messageEpic } from '../message/epic';

export const epic = combineEpics(...loginEpic, ...messageEpic);
export const epicMiddleware = createEpicMiddleware();
