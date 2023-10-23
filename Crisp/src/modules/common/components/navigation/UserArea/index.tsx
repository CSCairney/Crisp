import React from "react";
import { MainRoutes } from "../../../../../routes";
import { Link } from "react-router-dom";
import "./styles.scss";

const UserArea: React.FC = () => {
    return (
        <div className='user-area__login'>
          <Link to={MainRoutes.LOGIN} className='user-area__login--link'>
            Login
          </Link>
        </div>
    )
}

export default UserArea;