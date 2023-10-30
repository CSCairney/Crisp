import React from "react";
import { selectMarkerLayers } from "../../store/selectors/markers";
import { useAppSelector } from "../../../../store";
import { Marker, Popup } from "react-leaflet";
import "./styles.scss";
import { LatLngExpression } from "leaflet";

const MarkersGroup: React.FC = () => {
    const markerLayers = useAppSelector(selectMarkerLayers);
    if (markerLayers) {
        markerLayers.flatMap((markerLayer) => {
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