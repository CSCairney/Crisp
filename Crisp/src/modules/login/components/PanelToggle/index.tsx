import React from "react";
import { authenticationViewMode } from "../../contants/login";
import "./styles.scss";
import { useAppDispatch } from "../../../../store";
import { setViewMode } from "../../store";

type PanelToggleProps = {
  type: authenticationViewMode;
  content: "Login" | "Register";
  isMobile?: boolean;
};

const PanelToggle: React.FC<PanelToggleProps> = ({ type, content, isMobile }) => {
  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    dispatch(setViewMode(type));
  };

  if (isMobile)
    return (
      <div className='panel-toggle'>
        <button className='panel-toggle__button box-shadow' onClick={toggleHandler}>
          {content}
        </button>
      </div>
    );
  else
    return (
      <div className='panel-toggle'>
        <button className='panel-toggle__button box-shadow' onClick={toggleHandler}>
          {content}
        </button>
      </div>
    );
};

export default PanelToggle;
