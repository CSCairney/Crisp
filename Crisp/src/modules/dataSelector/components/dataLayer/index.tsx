import React from "react";
import { dataLayer } from "../../types/data";
import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { toggleTempSelectedLayer } from "../../store";
import { selectIsLayerNameSelected } from "../../store/selectors/dataSelectors";

export type DataLayerProps = {
  layerDetails: dataLayer;
};

const DataLayer: React.FC<DataLayerProps> = ({ layerDetails }) => {
    const dispatch = useAppDispatch();
    const isChecked = useAppSelector(selectIsLayerNameSelected(layerDetails.layer));

  const layerCheckboxHandler = (layerName: string) => {
    dispatch(toggleTempSelectedLayer(layerName));
  };

  return (
    <div className='data-layer'>
      <div className='data-layer__checkbox-container'>
        <input checked={isChecked} className="data-layer__checkbox-input" type='checkbox' value={layerDetails.layer} onChange={() => layerCheckboxHandler(layerDetails.layer)} />
      </div>
      <div className='data-layer__body'>
        <ul className="data-layer__primary-list">
          <li>
            <h3>
              <strong>{layerDetails.layer}</strong>
            </h3>
          </li>
          <li>
            <ul className="data-layer__secondary-list">
              <li>
                <h6>Group Type: {layerDetails.grouptype}</h6>
              </li>
              <li>
                <h6>Map Type:{layerDetails.maptype}</h6>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default DataLayer;
