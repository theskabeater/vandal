import * as React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import { config as routeConfig } from '../root/root.navigation';
import { Routes } from '../root/root.routes';

const AppNavigator = createStackNavigator(routeConfig, {
    initialRouteName: Routes.Login,
});
const AppNavigation = createAppContainer(AppNavigator);

export const AppContainer = connect()(
    class extends React.Component {
        public render = () => <AppNavigation />;
    },
);
