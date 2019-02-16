import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

import { epicMiddleware } from './root.epic';
import { reducer as rootReducer } from './root.reducer';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware)),
);
