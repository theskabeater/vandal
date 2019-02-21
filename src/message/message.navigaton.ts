import { registerRoute } from '../core/core.utils';
import { MessageScreen } from './message.screen';

export const routeConfig = registerRoute({
    'message-screen': MessageScreen,
});
