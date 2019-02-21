import { registerRoute } from '../core/core.utils';
import { LoginScreen } from './login.screen';

export const routeConfig = registerRoute({
    'login-screen': LoginScreen,
});
