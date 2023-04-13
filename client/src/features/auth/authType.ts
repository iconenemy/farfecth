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

export interface IAuth {
    accessToken: string | null;
    refreshToken: string | null;
    user: IUser | null
}

export interface ITokens {
    accessToken: string | null;
    refreshToken: string | null;
}

export interface IRefreshResonse {
    accessToken: string | null;
    refreshToken: string | null;
    user: {
        id: string;
        role: RoleType,
        email: string;
    }
}

export interface ILoginAuth {
    email: string;
    password: string;
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
}