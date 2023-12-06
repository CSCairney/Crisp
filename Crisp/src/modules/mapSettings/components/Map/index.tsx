import React, { useState } from "react";
import "./styles.scss";
import { MapContainer, TileLayer} from "react-leaflet";
import MarkersGroup from "../MarkersGroup";
import { useAppSelector } from "../../../../store";
import { selectMarkerLayers } from "../../store/selectors/markers";
import MapControls from "../MapControls";
import SearchControls from "../SearchControls";
import { selectCurrentLocation } from "../../../login/store/selectors/login";
import LocationMarker from "../LocationMarker";

const Map: React.FC = () => {
  const [center, setCenter] = useState<[number, number]>([55.8611550, -4.2501687]);
  const markerLayers = useAppSelector(selectMarkerLayers);
  const currentLocation = useAppSelector(selectCurrentLocation);

  if (currentLocation) {
    setCenter([currentLocation.lat, currentLocation.lng]);
  }
  return (
    <div className='map-container'>
      <MapContainer 
        center={center} 
        zoom={7} 
        zoomControl={true}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <MarkersGroup layers={markerLayers}/>
        <LocationMarker />
        <SearchControls />
        <MapControls />
      </MapContainer>
    </div>
  );
};

export default Map;
