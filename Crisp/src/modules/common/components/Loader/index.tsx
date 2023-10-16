import React from "react";

import BarLoader from "./BarLoader";
import CircularLoader from "./CircularLoader";
import "./styles.scss";

type LoaderProps = {
  type?: "Bar" | "Spinner";
  loadingItemDetails?: string;
};

const Loader: React.FC<LoaderProps> = ({ type, loadingItemDetails }) => {
  return (
    <div className="loader" aria-label="loading">
      <div className="loader__container">
        <p>
          {type === "Bar" ? <BarLoader /> : <CircularLoader />}
          <strong className="loader__details">{loadingItemDetails}</strong>
        </p>
      </div>
    </div>
  );
};

export default Loader;
