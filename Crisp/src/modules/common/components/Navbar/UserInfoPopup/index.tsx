import React from "react";
import "./styles.scss";
import { userInfo } from "~/login/types/users";

type UserInfoPopupProps = {
    user: userInfo
}

const UserInfoPopup: React.FC<UserInfoPopupProps> = ({user}) => {
    return (
        <>
        <p>Email: {user.email}</p>
        <p>Username: {user.username}</p>
        <p>Role: {user.role}</p>
        <p>Account Creation: {user.created_at}</p>
        </>
    )
}

export default UserInfoPopup;