import React from "react";
import "./styles.scss";
import { authenticationViewMode } from "../../contants/login";

type PanelContainerProps = {
  activePanel: authenticationViewMode;
  panelType: authenticationViewMode;
  children: React.ReactNode;
};

const PanelContainer: React.FC<PanelContainerProps> = ({activePanel, panelType, children }) => {
  return (
    <>
      {panelType !== activePanel && <div className='panel-container'>{children}</div>}
    </>
  );
};

export default PanelContainer;
