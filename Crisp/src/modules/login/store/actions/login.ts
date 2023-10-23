import { ActionWithThunk } from "../../../../modules/common/types/store";
import { userLogin } from "../../types/users";
import { authUser, setUserState } from "..";
import { toast } from "sonner";
import { createUserSettings } from "../helpers/users";

export function loginUser( userInfo: userLogin): ActionWithThunk {
    return (dispatch, getState) => {
        try {
            if (getState().userState.users.some((user) => user.username === userInfo.username && user.password === userInfo.password)) {
                dispatch(authUser(userInfo));
                toast.success('Login successful');
            } else {
                toast.error("Invalid username or password");
            }
        } catch (e) {
            toast.error("Error logging in user");
            throw new Error("Error logging in user");
        }
    }
}

export const getPersistedUserSettings = (): ActionWithThunk => {
    const userSettings = createUserSettings();
    return (dispatch) => {
      dispatch(setUserState(userSettings));
    };
  };