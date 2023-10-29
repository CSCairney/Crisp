import { authenticationViewMode } from "../contants/login";

export type userInfo = {
    username: string,
    first_name: string,
    last_name: string,
    age: number,
    email: string,
    password: string,
    role: string,
}

export type userLogin = {
    username: string,
    password: string
}

export type userState = {
    isLoading: boolean,
    viewMode: authenticationViewMode,
    errorMessage: string,
    activeUserId: string,
    userJWT: string,
    users: userInfo[];
}