import { keys } from 'lodash';

export enum Routes {
    Nav = 'NavContainer',
    Login = 'LoginContainer',
}

export const routes: Routes[] = keys(Routes).map(
    route => Routes[route as keyof typeof Routes],
);
