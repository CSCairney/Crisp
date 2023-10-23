import React from "react";
import "./styles.scss";
import { MapContainer, TileLayer } from 'react-leaflet'

const Map: React.FC = () => {
  return (
    <div className="map-container">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ width: "100vw", height: "100vh" }}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        </MapContainer>
    </div>
  );
};

export default Map;
