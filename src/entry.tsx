import * as React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import { epic as rootEpic, epicMiddleware, routes, store } from './root';

epicMiddleware.run(rootEpic);

const navigation = createStackNavigator(routes);
const AppNavigation = createAppContainer(navigation);

export const entry = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
);
