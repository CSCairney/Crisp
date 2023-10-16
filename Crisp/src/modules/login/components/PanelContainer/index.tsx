import React from "react";
import "./styles.scss";

type PanelContainerProps = {
  position: "left" | "right";
  children: React.ReactNode;
};

const PanelContainer: React.FC<PanelContainerProps> = ({ position, children }) => {
    const positionClass = `panel-container--${position}`;
  return (
    <>
      <div className={`panel-container ${positionClass}`}>{children}</div>
    </>
  );
};

export default PanelContainer;
