export interface IUserApiResponse {
    data: {
        id: string;
        name: string;
        email: string;
        email_verified_at: Date | null;
        created_at: Date;
        updated_at: Date;
        api_token: string;
    };
}
