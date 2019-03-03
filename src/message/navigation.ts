import { registerRoute } from '../core/utils';
import { MessageScreen } from './screen';

export const routeConfig = registerRoute({
    'message-screen': MessageScreen,
});
