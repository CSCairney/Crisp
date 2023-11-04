import React from "react";
import { Marker, Popup } from "react-leaflet";
import "./styles.scss";
import { LatLngExpression } from "leaflet";
import { markerDetail } from "../../types/map";
// import { markerTypeIentifier } from "../../helpers/markerType";

type MarkersCustomProps = {
  layer: markerDetail;
  type?: string;
};

const MarkerCustom: React.FC<MarkersCustomProps> = ({ layer }) => {
  // const className = markerTypeIentifier(type);
  const coordinate: LatLngExpression = [layer.coordinate.lat, layer.coordinate.long];
  // console.log(className)

  return (
    <>
      <Marker position={coordinate}>
        <Popup>
          <>
            <h2><strong>{layer.markerName}</strong></h2>
            <h3><strong>Observations</strong></h3>
            <ul>
              {layer.observations.map((observation) => {
                return <li key={observation}>{observation}</li>;
              })}
            </ul>
          </>
        </Popup>
      </Marker>
    </>
  );
};

export default MarkerCustom;
