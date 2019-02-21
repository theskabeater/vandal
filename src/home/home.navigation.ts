import { keys } from 'lodash';
import { registerRoute } from '../core/core.utils';
import { HomeScreen } from './home.screen';

export const routeConfig = registerRoute({
    'home-screen': HomeScreen,
});

export const routes = keys(routeConfig);
