import { ActionWithThunk } from "../../../../modules/common/types/store";
import { userLogin } from "../../types/users";
import { authUser } from "..";
import { toast } from "sonner";

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