import { registerRoute } from '../core/utils';
import { LoginScreen } from './screen';

export const routeConfig = registerRoute({
    'login-screen': LoginScreen,
});
