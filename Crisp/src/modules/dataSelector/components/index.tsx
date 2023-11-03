import React from "react";
import "./styles.scss";
import { useAppSelector } from "../../../store";
import { selectDataLayers } from "../store/selectors/dataSelectors";

const DataSelector: React.FC = () => {
  const dataLayerNames = useAppSelector(selectDataLayers);

  const layerCheckboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }
  
  return (
    <>
        <div className='data-selector'>
          <ul>
          {dataLayerNames.map((layerName) => (
            <>
              <input type="checkbox" value={layerName} onChange={layerCheckboxHandler} />
              <li key={layerName}>{layerName}</li>
            </>
          ))}
          </ul>
        </div>
    </>
  );
};

export default DataSelector;
