import {
    createAppContainer,
    createStackNavigator,
    NavigationRouteConfig,
} from 'react-navigation';

import { routeConfig as HomeRouteConfig } from '../home/home.navigation';
import { routeConfig as LoginRouteConfig } from '../login/login.navigation';
import { routeConfig as MessageRouteConfig } from '../message/message.navigaton';

export const routeConfig: NavigationRouteConfig = {
    ...HomeRouteConfig,
    ...LoginRouteConfig,
    ...MessageRouteConfig,
};

export const AppNavigation = createAppContainer(
    createStackNavigator(routeConfig),
);
