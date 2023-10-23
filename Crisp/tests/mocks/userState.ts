import { authenticationViewMode } from "../../src/modules/login/contants/login";
import { userState } from "../../src/modules/login/types/users";

export const userMockState: userState = {
    isLoading: false,
        viewMode: authenticationViewMode.LOGIN,
        errorMessage: "",
        activeUserId: "",
        users: [],
    };