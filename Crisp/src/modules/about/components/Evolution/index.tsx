import React from "react";
import "./styles.scss";

type EvolutionProps = {
  title: string;
  alt: string;
  content: string;
};

const Evolution: React.FC<EvolutionProps> = ({ title, alt, content }) => {
  return (
    <div className="evolution">
      <h2 className="evolution__main" aria-label={alt}>
        {title}
      </h2>
      <p className="evolution__content">{content}</p>
    </div>
  );
};

export default Evolution;
