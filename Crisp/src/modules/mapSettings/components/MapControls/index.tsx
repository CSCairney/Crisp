import React from "react";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { FaLayerGroup } from "react-icons/fa";
import { BsFilterCircleFill } from "react-icons/bs";
import { BiStreetView } from "react-icons/bi";
import { IoMdLocate } from "react-icons/io";

import "./styles.scss";
import { useAppSelector } from "../../../../store";
import { selectPanelStatus, selectSidebarStatus } from "../../../common/store/selectors/menu";
import { useDispatch } from "react-redux";
import { setPanelOpenStatus, setSidebarOpenStatus } from "../../../common/store/index";
import { panelTypes } from "../../../common/constants/menu";
import { useMapEvents } from "react-leaflet";
// import { LatLng } from "leaflet";
import { toast } from "sonner";
import { TooltipPlacements, TooltipThemes } from "../../../common/types/tooltip";
import Tooltip from "../../../common/components/Tooltip";
// import { setCurrentLocation } from "../../../login/store";

const MapControls: React.FC = () => {
  // const [location, setLocation] = useState<LatLng>()
  const isSidebarOpen = useAppSelector(selectSidebarStatus);
  const activePanel = useAppSelector(selectPanelStatus);
  const dispatch = useDispatch();

  const map = useMapEvents({
    locationfound(e) {
      map.flyTo(e.latlng, 12);
      // setLocation(e.latlng);
      toast.success("Here you are!");
    },
  });

  const menuOpenHandler = () => {
    dispatch(setSidebarOpenStatus(true))
  }

  const menuCloseHandler = () => {
    dispatch(setSidebarOpenStatus(false))
    dispatch(setPanelOpenStatus(panelTypes.None))
  }

  const panelHandler = (panel: panelTypes) => {
    if (panel === activePanel) {
      dispatch(setPanelOpenStatus(panelTypes.None))
    } else {
      dispatch(setPanelOpenStatus(panel))
    }
  }

  const locateMeHandler = () => {
    map.locate();
  }

  if (isSidebarOpen) return (
    <div className='map-controls--open'>
      <div className='map-controls__container'>
        <Tooltip tooltipContent="Select Layers" placement={TooltipPlacements.Top} theme={TooltipThemes.Light}>
          <button onClick={() => panelHandler(panelTypes.Selection)} className='map-controls__button'>
            <FaLayerGroup className='map-controls__icon' />
          </button>
        </Tooltip>
        <Tooltip tooltipContent="Saved Views" placement={TooltipPlacements.Top} theme={TooltipThemes.Light}>
          <button onClick={() => panelHandler(panelTypes.Filter)} className='map-controls__button'>
            <BsFilterCircleFill className='map-controls__icon' />
          </button>
        </Tooltip>
        <Tooltip tooltipContent="Filter Icons" placement={TooltipPlacements.Top} theme={TooltipThemes.Light}>
          <button onClick={() => panelHandler(panelTypes.Views)} className='map-controls__button'>
            <BiStreetView className='map-controls__icon' />
          </button>
        </Tooltip>
        <Tooltip tooltipContent="Locate Me" placement={TooltipPlacements.Top} theme={TooltipThemes.Light}>
          <button onClick={() => locateMeHandler()} className="map-controls__button" id="locate-me-button">
            <IoMdLocate className='map-controls__icon' />
          </button>
        </Tooltip>
        <Tooltip tooltipContent="Close Map Controls" placement={TooltipPlacements.Top} theme={TooltipThemes.Light}>
          <button className="map-controls__button" onClick={() => menuCloseHandler()}>
            <FiArrowLeftCircle className='map-controls__icon' />
          </button>
        </Tooltip>
      </div>
    </div>
  )

  return (
    <div className='map-controls--closed'>
      <Tooltip tooltipContent="Open Map Controls" placement={TooltipPlacements.Top} theme={TooltipThemes.Light}>
        <button className="map-controls__button" onClick={() => menuOpenHandler()}>
          <FiArrowRightCircle className='map-controls__icon' />
        </button>
      </Tooltip>
    </div>
  );
};

export default MapControls;
