import { authenticationViewMode } from "../../src/modules/login/contants/login";
import { userState } from "../../src/modules/login/types/users";

export const userMockState: userState = {
    isLoading: false,
        viewMode: authenticationViewMode.LOGIN,
        errorMessage: "",
        user: {
            age: 0,
            email: "",
            first_name: "",
            last_name: "",
            password: "",
            role: "",
            username: "",
            user_id: "",
        },
        accessToken: ""
}