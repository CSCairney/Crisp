import React from "react";
import { useAppSelector } from "../../../store";
import { selectPanelStatus } from "../../common/store/selectors/menu";
import { panelTypes } from "../../common/constants/menu";
import "./styles.scss";

const DataSelector: React.FC = () => {
  const activePanel = useAppSelector(selectPanelStatus);
  return (
    <>
      {activePanel === panelTypes.Selection ? (
        <div className='data-selector'>
          <p className='data-selector__title'>This is a data selector</p>
        </div>
      ) : null}
    </>
  );
};

export default DataSelector;
