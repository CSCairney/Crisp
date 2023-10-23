import { authenticationViewMode } from "../contants/login";
import { accessLevel } from "../contants/users";

export type userInfo = {
    id: string,
    username: string,
    email: string,
    password: string,
    role: accessLevel,
    status: string,
    created_at: string,
    updated_at: string,
    contactInfo: {
        mobile: string,
        landline?: string
    },
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
    users: userInfo[];
}