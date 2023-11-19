import React from "react";
import "./styles.scss";
import HeaderBackground from "../../../../assets/about/HeaderBackground.jpg";
import ExternalLinkButton from "../../../common/components/ExternalLinkButton";

const Header: React.FC = () => {
  return (
    <>
      <div className="header">
        <img
          className="header__background"
          src={HeaderBackground}
          alt="about us header image"
        />
        <div className="header__container">
          <h1 className="header__container--title">"Charting Stories, Unveiling Boundless Horizons."</h1>
          <h3 className="header__container--content">
          At <strong>Crisp</strong>, our mission is to make spatial information accessible to everyone, transforming data into meaningful experiences.
          We believe that every coordinate on the map tells a unique story, and we strive to provide a platform that fosters exploration, discovery, and knowledge sharing.
          </h3>
          <ExternalLinkButton label="Learn More" alt="Link to linkedin" link="https://www.linkedin.com/in/charlescairney/" size="large" />
        </div>
      </div>
    </>
  );
};

export default Header;
