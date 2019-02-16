import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { epics as loginEpic } from '../login';

// tslint:disable:no-any
export const epic = combineEpics<any>(...loginEpic);

export const epicMiddleware = createEpicMiddleware();
