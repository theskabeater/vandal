export interface IUser {
    id?: string;
    name?: string;
    email?: string;
    emailVerifiedAt?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
    apiToken?: string;
}
