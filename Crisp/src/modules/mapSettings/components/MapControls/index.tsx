import React from "react";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { FaLayerGroup } from "react-icons/fa";
import { BsFilterCircleFill } from "react-icons/bs";
import { BiStreetView } from "react-icons/bi";
import "./styles.scss";
import { useAppSelector } from "../../../../store";
import { selectSidebarStatus } from "../../../common/store/selectors/menu";
import { useDispatch } from "react-redux";
import { setPanelOpenStatus, setSidebarOpenStatus } from "../../../common/store/index";
import { panelTypes } from "../../../common/constants/menu";

const MapControls: React.FC = () => {
  const isSidebarOpen = useAppSelector(selectSidebarStatus);
  const dispatch = useDispatch();

  const menuHandler = (status: boolean) => {
    dispatch(setSidebarOpenStatus(status))
  }

  const panelHandler = (panel: panelTypes) => {
    dispatch(setPanelOpenStatus(panel))
  }

  if (isSidebarOpen) return (
        <div className='map-controls--open'>
          <div className='map-controls__container'>
            <button onClick={() => panelHandler(panelTypes.Selection)} className='map-controls__button'>
                <FaLayerGroup className='map-controls__icon' />
            </button>
            <button onClick={() => panelHandler(panelTypes.Filter)} className='map-controls__button'>
                <BsFilterCircleFill className='map-controls__icon' />
            </button>
            <button onClick={() => panelHandler(panelTypes.Views)} className='map-controls__button'>
                <BiStreetView className='map-controls__icon' />
            </button>
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
