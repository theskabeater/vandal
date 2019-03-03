import { NavigationRouteConfigMap } from 'react-navigation';

let registeredRoutes: NavigationRouteConfigMap;

export const registerRoute = (
    routeConfig: NavigationRouteConfigMap,
): NavigationRouteConfigMap => {
    registeredRoutes = { ...registeredRoutes, ...routeConfig };
    return routeConfig;
};

export const getRoutes = () => ({ ...registeredRoutes });
