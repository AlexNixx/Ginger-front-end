export type FormValues = {
    email: string
    password: string
    confirmPassword?: string
}

export interface DataResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface IUser {
    id: string;
    email: string;
    isActivated: boolean;
    role: string;
}

export interface IUserState {
    user: IUser | null;
}