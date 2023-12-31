import React, { useState } from "react";
import { MainRoutes } from "../../../../../routes";
import { Link } from "react-router-dom";
import "./styles.scss";
import { useAppSelector } from "../../../../../store";
import { selectAccessToken, selectActiveUserInfo } from "../../../../login/store/selectors/login";
import {BiUserCircle} from "react-icons/bi";
import Tooltip from "../../Tooltip";
import UserInfoPopup from "../UserInfoPopup";
import { TooltipThemes } from "../../../../common/types/tooltip";

const UserArea: React.FC = () => {
  const activeToken = useAppSelector(selectAccessToken);
  const activeUserStatus = useAppSelector(selectActiveUserInfo);
  const [userVisible, setUserVisible] = useState(false);
    if (!activeToken) return (
        <div className='user-area__login'>
          <Link to={MainRoutes.LOGIN} className='user-area__login--link'>
            Login
          </Link>
        </div>
    )

    return (
        <div className='user-area__login'>
          <Tooltip theme={TooltipThemes.Light} isInteractive tooltipContent={<UserInfoPopup user={activeUserStatus} />} >
          <button aria-label="user area toggle" className='user-area__login--link' onClick={() => setUserVisible(!userVisible)}>
            <BiUserCircle className='user-area__login--icon' />
          </button>
          </Tooltip>
        </div>
    )
}

export default UserArea;