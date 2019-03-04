import { SecureStore } from 'expo';
import { NavigationRouteConfigMap } from 'react-navigation';
import { from, Observable } from 'rxjs';

import { IUser } from '../user/model';
import { USER_STORAGE_KEY } from './constants';

let registeredRoutes: NavigationRouteConfigMap;
export const registerRoute = (
    routeConfig: NavigationRouteConfigMap,
): NavigationRouteConfigMap => {
    registeredRoutes = { ...registeredRoutes, ...routeConfig };
    return routeConfig;
};
export const getRoutes = () => ({ ...registeredRoutes });

export const saveUserToDevice = (user: IUser): void => {
    const { apiToken } = user;
    if (apiToken) {
        SecureStore.setItemAsync(USER_STORAGE_KEY, apiToken, {
            keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
        });
    }
};

export const getUserFromDevice = (): Observable<IUser['apiToken'] | null> =>
    from(SecureStore.getItemAsync(USER_STORAGE_KEY));
