import React from "react";
import "./styles.scss";
import { useAppSelector } from "../../../store";
import { selectDataLayers } from "../store/selectors/dataSelectors";
import DataLayer from "./dataLayer";
import DataControls from "./dataControls";

const DataSelector: React.FC = () => {
  const dataLayerNames = useAppSelector(selectDataLayers);
  console.table(dataLayerNames);
  
  return (
    <>
        <div className='data-selector'>
          <ul className="data-selector__list">
          {dataLayerNames.map((layer) => (
            <li key={layer.layer} className="data-selector__item-container">
              <DataLayer layerDetails={layer} />
            </li>
          ))}
          </ul>
          <DataControls />
        </div>
    </>
  );
};

export default DataSelector;
