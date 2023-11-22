import React from "react";
import "./styles.scss";
import "../../../../styles/animations.scss"

type AuthPanelContainerProps = {
  children: React.ReactNode;
};

const AuthPanelContainer: React.FC<AuthPanelContainerProps> = ({ children }) => {
  return (
    <>
      <div className="auth-panel-container box-shadow">{children}</div>
    </>
  );
};

export default AuthPanelContainer;
