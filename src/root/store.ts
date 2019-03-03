import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import { epic as rootEpic, epicMiddleware } from './epic';
import { reducer as rootReducer } from './reducer';

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic);
