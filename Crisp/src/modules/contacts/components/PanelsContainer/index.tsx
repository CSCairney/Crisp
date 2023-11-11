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
            <DevPanel/>
            <EmailPanel />
        </div>
    )
}

export default PanelsContainer;