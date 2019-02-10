import * as React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'remote-redux-devtools';

import { rootEpic, rootReducer } from './reducers/root';
import { routes } from './routes';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic);

const navigation = createStackNavigator(routes);
const AppNavigation = createAppContainer(navigation);

export const entry = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);
