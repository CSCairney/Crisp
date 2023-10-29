import { authenticationViewMode } from "../contants/login";

export type userInfo = {
    age: number,
    email: string,
    first_name: string,
    last_name: string,
    password: string,
    role: string,
    user_id?: string,
    username: string,
}

export type userLogin = {
    username: string,
    password: string
}

export type userState = {
    isLoading: boolean,
    viewMode: authenticationViewMode,
    errorMessage: string,
    user: {
        info: userInfo;
        accessToken: string;
    }
}