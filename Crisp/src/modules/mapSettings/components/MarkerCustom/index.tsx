import React from "react";
import { Marker, Popup } from "react-leaflet";
import "./styles.scss";
import { LatLngExpression } from "leaflet";
import { markerDetail } from "../../types/map";

type MarkersCustomProps = {
  layer: markerDetail;
};

const MarkerCustom: React.FC<MarkersCustomProps> = ({ layer }) => {
  const coordinate: LatLngExpression = [layer.coordinate.lat, layer.coordinate.long];
  return (
    <>
      <Marker key={layer.markerName} position={coordinate}>
        <Popup>
          <p>
            <strong>{layer.markerName}</strong>
          </p>
          <p>{layer.observations.join(", ")}</p>
        </Popup>
      </Marker>
    </>
  );
};

export default MarkerCustom;
