import React from "react";
import "./styles.scss";
import { useAppSelector } from "../../../store";
import { selectDataLayers } from "../store/selectors/dataSelectors";
import DataLayer from "./dataLayer";
import DataControls from "./dataControls";
import { selectAccessToken } from "../../login/store/selectors/login";
import { Link } from "react-router-dom";
import { MainRoutes } from "../../../routes";

const DataSelector: React.FC = () => {
  const dataLayerNames = useAppSelector(selectDataLayers);
  const accessToken = useAppSelector(selectAccessToken);
  
  if (accessToken) return (
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

  return (
    <div className="data-selector__alternative">
      <p>No Data?</p>
      <p>Please login to retrieve</p>
      <Link to={MainRoutes.LOGIN} className="data-selector__login-button">Login</Link>
    </div>
  )
};

export default DataSelector;
