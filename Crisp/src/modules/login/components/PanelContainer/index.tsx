import React from "react";
import "./styles.scss";
import "../../../../styles/animations.scss"

type PanelContainerProps = {
  position: "left" | "right";
  children: React.ReactNode;
};

const PanelContainer: React.FC<PanelContainerProps> = ({ position, children }) => {
    const positionClass = `panel-container--${position}${position === "left" ? " slide-right" : " slide-left"}`;
  return (
    <>
      <div className={`panel-container ${positionClass}`}>{children}</div>
    </>
  );
};

export default PanelContainer;
