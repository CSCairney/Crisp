import React from "react";
import { Marker, Popup } from "react-leaflet";
import "./styles.scss";
import { LatLngExpression } from "leaflet";
import { markerData } from "../../types/map";

type MarkersGroupProps = {
    layers: markerData[];
};

const MarkersGroup: React.FC<MarkersGroupProps> = ({layers}) => {
    if (layers) {
        layers.flatMap((markerLayer) => {
            return markerLayer.details.map((marker) => {
                const coordinate: LatLngExpression = [marker.coordinate.lat, marker.coordinate.long];
                return (
                  <>
                      <Marker key={marker.markerName} position={coordinate}>
                          <Popup>
                              <p><strong>{marker.markerName}</strong></p>
                              <p>{marker.observations.join(", ")}</p>
                          </Popup>
                      </Marker>
                  </>
                );
            });
          });
    }
  
    return <></>;
  };

  export default MarkersGroup;