import React from "react";

import BarLoader from "./BarLoader";
import CircularLoader from "./CircularLoader";
import "./styles.scss";
import { selectLoadingState } from "../../../common/store/selectors/loading";
import { useAppSelector } from "../../../../store";

type LoaderProps = {
  type?: "Bar" | "Spinner";
  loadingItemDetails?: string;
};

const Loader: React.FC<LoaderProps> = ({ type, loadingItemDetails }) => {
  const isLoading = useAppSelector(selectLoadingState);
  if (isLoading) return (
    <div className="loader" aria-label="loading">
      <div className="loader__container">
        <p>
          {type === "Bar" ? <BarLoader /> : <CircularLoader />}
          <strong className="loader__details">{loadingItemDetails}</strong>
        </p>
      </div>
    </div>
  );
  else return null;
};

export default Loader;
