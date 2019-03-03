import { IResponse as IApiResponse } from './api';
import { IUser } from './model';

/**
 * User Response Map
 */
export const fromApiResponse = (response: IApiResponse): IUser => {
    const { data } = response;

    return {
        id: data.id,
        name: data.name,
        email: data.email,
        emailVerifiedAt: data.email_verified_at,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
        apiToken: data.api_token,
    };
};
