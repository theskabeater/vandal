import { NavigationRouteConfigMap } from 'react-navigation';

import { LoginContainer } from '../login/login.container';
import { NavContainer } from '../nav/nav.container';
import { Routes } from './root.routes';

export const config: NavigationRouteConfigMap = {
    [Routes.Nav]: { screen: NavContainer },
    [Routes.Login]: { screen: LoginContainer },
};
