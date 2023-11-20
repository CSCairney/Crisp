import { authenticationViewMode } from "../../../../login/contants/login";
import { userState } from "../../../../login/types/users";

export const mockUserState: userState = {
    isLoading: false,
    viewMode: authenticationViewMode.LOGIN,
    errorMessage: "",
    user: {
        age: 20,
        email: "charles@test.com",
        first_name: "charles",
        last_name: "cairney",
        password: "1234",
        role: "user",
        username: "charles",
    },
    accessToken: "123456789",
};