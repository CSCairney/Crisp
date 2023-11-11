import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.scss";

type ExternalLinkButtonProps = {
  link: string;
  label: string;
  alt: string;
  size: "small" | "medium" | "large";
}

const ExternalLinkButton:React.FC<ExternalLinkButtonProps> = ({ link, label, alt, size }) => {

  return (
      <Link className={`external-link-button--${size}`} to={link} target="_blank" aria-label={alt} >{label}</Link>
  );
};

export default ExternalLinkButton;