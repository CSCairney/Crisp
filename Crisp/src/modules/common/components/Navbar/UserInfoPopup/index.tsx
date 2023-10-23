import React from "react";
import "./styles.scss";
import { userInfo } from "~/login/types/users";
import { useAppDispatch } from "../../../../../store";
import { logoutUser } from "../../../../login/store/actions/login";

type UserInfoPopupProps = {
    user: userInfo
}

const UserInfoPopup: React.FC<UserInfoPopupProps> = ({user}) => {
    const dispatch = useAppDispatch();

    const logoutHandler = () => {
        dispatch(logoutUser());
    }

    return (
        <div className="user-info">
            <div className="user-info__details">
                <p>Email: {user.email}</p>
                <p>Username: {user.username}</p>
                <p>Role: {user.role}</p>
                <p>Account Creation: {user.created_at}</p>
            </div>
        <button className="user-info__button" onClick={logoutHandler} >Logout</button>
        </div>
    )
}

export default UserInfoPopup;