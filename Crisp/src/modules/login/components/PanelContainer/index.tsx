import React from "react";
import "./styles.scss";

type PanelContainerProps = {
  children: React.ReactNode;
};

const PanelContainer: React.FC<PanelContainerProps> = ({ children }) => {
  return (
    <>
      <div className='panel-container'>{children}</div>
    </>
  );
};

export default PanelContainer;
