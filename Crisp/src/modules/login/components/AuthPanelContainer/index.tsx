import React from "react";
import "./styles.scss";
import "../../../../styles/animations.scss"

type AuthPanelContainerProps = {
  position: "left" | "right";
  children: React.ReactNode;
};

const AuthPanelContainer: React.FC<AuthPanelContainerProps> = ({ position, children }) => {
    const positionClass = `auth-panel-container--${position}${position === "left" ? " slide-right" : " slide-left"}`;
  return (
    <>
      <div className={`auth-panel-container ${positionClass}`}>{children}</div>
    </>
  );
};

export default AuthPanelContainer;
