import { authenticationViewMode } from "../contants/login";

export type userInfo = {
    id: string,
    username: string,
    email: string,
    password: string,
    role: string,
    status: string,
    created_at: string,
    updated_at: string,
    contactInfo: {
        mobile: string,
        landline: string
    },
}

export type userState = {
    isLoading: boolean,
    viewMode: authenticationViewMode,
    errorMessage: string,
    users: userInfo[];
}