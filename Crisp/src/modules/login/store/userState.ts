import { authenticationViewMode } from "../contants/login";
import { userState } from "../types/users";

export function createInitialUserState(): userState {
    return {
        isLoading: false,
        viewMode: authenticationViewMode.LOGIN,
        errorMessage: "",
        activeUserId: "",
        users: [],
}
}