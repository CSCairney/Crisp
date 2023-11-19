import React from "react";
import "./styles.scss";
import { userInfo } from "../../../../login/types/users";
import { useAppDispatch, useAppSelector } from "../../../../../store";
import { logoutUser } from "../../../../login/store/actions/login";
import { selectAccessToken } from "../../../../login/store/selectors/login";
import { useNavigate } from "react-router";

type UserInfoPopupProps = {
    user: userInfo
}

const UserInfoPopup: React.FC<UserInfoPopupProps> = ({user}) => {
    const dispatch = useAppDispatch();
    const accessToken = useAppSelector(selectAccessToken);
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logoutUser());
    }

    const loginHandler = () => {
        navigate("/login");
    }

    if (accessToken) return (
        <div className="user-info">
            <div className="user-info__details">
                <p>Email: {user.email}</p>
                <p>Username: {user.username}</p>
                <p>Role: {user.role}</p>
            </div>
        <button className="user-info__button" onClick={logoutHandler} >Logout</button>
        </div>
    )
    else return (
        <div className="user-info">
            <p className="user-info__message">Please login to view user info</p>
            <button className="user-info__button" onClick={loginHandler} >Login Page</button>
        </div>
    )
}

export default UserInfoPopup;