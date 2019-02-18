import { IUserResponsePayload } from './user.action';
import { IUserApiResponse } from './user.api';

/**
 * User Response Map
 */
export const fromUserApiResponse = (
    response: IUserApiResponse,
): IUserResponsePayload => {
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
