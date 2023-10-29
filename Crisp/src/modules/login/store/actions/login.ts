import { ActionWithThunk } from "../../../../modules/common/types/store";
import { userLogin } from "../../types/users";
import { clearUser, setUserState } from "..";
import { toast } from "sonner";
import { createUserSettings } from "../helpers/users";

export function loginUser( userInfo: userLogin): ActionWithThunk {
    return (dispatch, getState) => {
        try {
            if (getState().userState.user.info.username === userInfo.username) {
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

export function logoutUser(): ActionWithThunk {
    return (dispatch) => {
        try {
            dispatch(clearUser())
                toast.success('Logout successful');
        } catch (e) {
            toast.error("Error Logout");
            throw new Error("Error with logout");
        }
    }
}

export const getPersistedUserSettings = (): ActionWithThunk => {
    const userSettings = createUserSettings();
    return (dispatch) => {
      dispatch(setUserState(userSettings));
    };
  };