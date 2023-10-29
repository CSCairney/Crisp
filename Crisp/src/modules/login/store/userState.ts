import { authenticationViewMode } from "../contants/login";
import { userState } from "../types/users";

export function createInitialUserState(): userState {
  return {
    isLoading: false,
    viewMode: authenticationViewMode.LOGIN,
    errorMessage: "",
    user: {
      info: {
        age: 0,
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        role: "",
        username: "",
        user_id: "",
      },
      accessToken: "",
    },
  };
}
