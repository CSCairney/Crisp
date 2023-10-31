import React, { useState } from "react";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import "./styles.scss";

const MapControls: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuHandler = (status: boolean) => {
    console.log("called with: ", status)
    setIsMenuOpen(status);
  }

  if (isMenuOpen) return (
        <div className='map-controls--open'>
          <div className='map-controls__container'>
            <div className='map-controls__panel'></div>
            <div className='map-controls__panel'></div>
            <div className='map-controls__panel'></div>
            <div className='map-controls__panel'></div>
            <button className="map-controls__button" onClick={() => menuHandler(false)}>
              <FiArrowLeftCircle className='map-controls__icon' />
            </button>
          </div>
        </div>
    )

    return (
        <div className='map-controls--closed'>
          <button className="map-controls__button" onClick={() => menuHandler(true)}>
            <FiArrowRightCircle className='map-controls__icon' />
          </button>
        </div>
  );
};

export default MapControls;
