import React from "react";
import "./styles.scss";

type DevPanelsProps = {
    children: React.ReactNode; 
}

const DevPanel:React.FC<DevPanelsProps> = ({ children }) => {
    return (
        <div className="dev-panel">
                { children }
        </div>
    )
}

export default DevPanel;