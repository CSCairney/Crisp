import React from "react";

import "./styles.scss";

const BarLoader: React.FC = () => {
  return <div className="loader_bar" aria-label="loading..." data-testid="bar-loader" />;
};

export default BarLoader;
