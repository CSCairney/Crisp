import React from "react";
import "./styles.scss";
import DevPanel from "../DevPanel";
import EmailPanel from "../EmailPanel";

type PanelsContainerProps = {
    type?: "dev" | "email";
}

const PanelsContainer: React.FC<PanelsContainerProps> = () => {
    return (
        <div className="panels-container">
            <DevPanel>
                <div className="panels-container__image">image</div>
                <div className="panels-container__content">content</div>
                <div className="panels-container__link">link</div>
            </DevPanel>
            <EmailPanel />
        </div>
    )
}

export default PanelsContainer;