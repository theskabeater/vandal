import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { epics as coreEpic } from '../core/epic';
import { epics as loginEpic } from '../login/epic';
import { epics as messageEpic } from '../message/epic';
import { epics as userEpic } from '../user/epic';

export const epic = combineEpics(
    ...coreEpic,
    ...loginEpic,
    ...userEpic,
    ...messageEpic,
);
export const epicMiddleware = createEpicMiddleware();
