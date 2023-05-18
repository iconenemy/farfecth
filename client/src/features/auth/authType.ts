export type RoleType =  'guest' | 'admin' | 'moderator' | null;

export interface IUser {
    id?: string;
    first_name?: string;
    last_name?: string | null;
    email?: string;
    phone_number?: string | null;
    is_active?: boolean;
    role?: RoleType;
}

export interface IResSignIn {
    accessToken: string | null;
    refreshToken: string | null;
    user: IUser | null
}

export interface IReqSignIn {
    email: string;
    password: string;
}

export interface IReqSignUp {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    phone_number: string;
}

export interface IResSignUp {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    role: RoleType;
    is_active: boolean;
}

export interface ITokens {
    accessToken: string | null;
    refreshToken: string | null;
}

export interface IResRefresh {
    accessToken: string | null;
    refreshToken: string | null;
    user: {
        id: string;
        role: RoleType,
        email: string;
    }
}


export interface IError {
    error: string
}

export interface IAuthState {
    user: IUser | null;
    accessToken: string | null;
    refreshToken: string | null;
    errors: IError[]
    loading: boolean; 
    isAuth: boolean;
}

export type UserUpdateBodyReq = Pick<IUser, "first_name" | "last_name" | "phone_number">;
export type UserUpdateRes = Pick<IUser, "first_name" | "last_name" | "phone_number">
export type UserUpdateReq = Pick<IUser,  "id" | "first_name" | "last_name" | "phone_number">