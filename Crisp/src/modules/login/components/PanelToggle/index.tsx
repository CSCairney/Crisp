import React from "react";
import { authenticationViewMode } from "../../contants/login";
import "./styles.scss";
import { useAppDispatch } from "../../../../store";
import { setViewMode } from "../../store";

type PanelToggleProps = {
    type: authenticationViewMode;
    content: "Login Panel" | "Register Panel";
}

const PanelToggle: React.FC<PanelToggleProps> = ({type, content}) => {
    const dispatch = useAppDispatch();

    const toggleHandler = () => {
        dispatch(setViewMode(type));
    }

    return (
            <div className="panel-toggle">
                <button className="panel-toggle__button" onClick={toggleHandler}>{content}</button>
            </div>
    )
}

export default PanelToggle;