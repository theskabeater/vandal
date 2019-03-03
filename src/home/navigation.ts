import { keys } from 'lodash';
import { registerRoute } from '../core/utils';
import { HomeScreen } from './screen';

export const routeConfig = registerRoute({
    'home-screen': HomeScreen,
});

export const routes = keys(routeConfig);
