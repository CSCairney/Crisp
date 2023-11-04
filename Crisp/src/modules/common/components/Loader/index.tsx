import React from "react";

import BarLoader from "./BarLoader";
import CircularLoader from "./CircularLoader";
import "./styles.scss";
import { selectLoadingState } from "../../../common/store/selectors/loading";
import { useAppSelector } from "../../../../store";

type LoaderProps = {
  type?: "Bar" | "Spinner";
};

const Loader: React.FC<LoaderProps> = ({ type }) => {
  const isLoading = useAppSelector(selectLoadingState);
  if (isLoading) return (
    <div className="loader" aria-label="loading">
      <div className="loader__container">
          {type === "Bar" ? <BarLoader /> : <CircularLoader />}
      </div>
    </div>
  );
  else return null;
};

export default Loader;
