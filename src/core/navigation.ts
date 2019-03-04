import {
    createAppContainer,
    createStackNavigator,
    NavigationRouteConfig,
} from 'react-navigation';

import { routeConfig as HomeRouteConfig } from '../home/navigation';
import { routeConfig as LoginRouteConfig } from '../login/navigation';
import { routeConfig as MessageRouteConfig } from '../message/navigation';

export const routeConfig: NavigationRouteConfig = {
    ...HomeRouteConfig,
    ...LoginRouteConfig,
    ...MessageRouteConfig,
};

export const Navigation = createAppContainer(createStackNavigator(routeConfig));
