import { ActionWithThunk } from "../../../../modules/common/types/store";
import { userInfo } from "../../types/users";
import { clearUser, setUser, setUserJWT, setUserState } from "..";
import { toast } from "sonner";
import { createUserSettings } from "../../../common/localStorage/helpers/userMerge";

export function loginUser( userInfo: userInfo, token: string): ActionWithThunk {
    return (dispatch) => {
        try {
                dispatch(setUser(userInfo));
                dispatch(setUserJWT(token));
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