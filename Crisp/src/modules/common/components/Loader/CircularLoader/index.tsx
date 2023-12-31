import React from "react";

import "./styles.scss";

const CircularLoader: React.FC = () => {
  return <div className="loader_circle" aria-label="loading..." data-testid="circular-loader" />;
};

export default CircularLoader;
