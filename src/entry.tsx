import * as React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import { epic as rootEpic, epicMiddleware } from './root/root.epic';
import { routes } from './root/root.routes';
import { store } from './root/root.store';

epicMiddleware.run(rootEpic);

const navigation = createStackNavigator(routes);
const AppNavigation = createAppContainer(navigation);

export const entry = () => (
    <Provider store={store}>
        <AppNavigation />
    </Provider>
);
