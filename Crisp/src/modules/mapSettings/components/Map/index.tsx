import React from "react";
import "./styles.scss";
import { MapContainer, TileLayer} from "react-leaflet";
import MarkersGroup from "../MarkersGroup";
import { useAppSelector } from "../../../../store";
import { selectMarkerLayers } from "../../store/selectors/markers";
import SearchBar from "../../../common/components/SearchBar";
import MapControls from "../MapControls";

const Map: React.FC = () => {
  const markerLayers = useAppSelector(selectMarkerLayers);
  return (
    <div className='map-container'>
      <MapContainer 
        center={[55.8611550, -4.2501687]} 
        zoom={7} 
        zoomControl={true}
        scrollWheelZoom={true}
        style={{ width: "100vw", height: "100vh" }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <MarkersGroup layers={markerLayers}/>
        <SearchBar />
        <MapControls />
      </MapContainer>
    </div>
  );
};

export default Map;
