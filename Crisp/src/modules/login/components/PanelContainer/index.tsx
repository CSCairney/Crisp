import React from "react";
import "./styles.scss";
import { authenticationViewMode } from "../../contants/login";
import { useAppSelector } from "../../../../store";
import { selectLoginViewMode } from "../../store/selectors/login";

type PanelContainerProps = {
  activeStatus: authenticationViewMode;
  children: React.ReactNode;
};

const PanelContainer: React.FC<PanelContainerProps> = ({ activeStatus, children }) => {
  const isActive = useAppSelector(selectLoginViewMode);

  return <>{activeStatus !== isActive ? null : <div className='panel-container'>{children}</div>}</>;
};

export default PanelContainer;
