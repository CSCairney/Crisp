import React from "react";
import { selectMarkerLayers } from "../../store/selectors/markers";
import { useAppSelector } from "../../../../store";
import { Marker, Popup } from "react-leaflet";

const MarkersGroup: React.FC = () => {
    const markerLayers = useAppSelector(selectMarkerLayers);
  
    const markers = markerLayers.flatMap((markerLayer) => {
      return markerLayer.details.map((marker) => {
        const lat = marker.coordinate.lat;
        const long = marker.coordinate.lng;
        if (lat !== undefined && long !== undefined) {
          return (
            <Marker key={marker.markerName} position={[lat, long]}>
              <Popup>
                <p><strong>{marker.markerName}</strong></p>
                <p>{marker.observations.join(", ")}</p>
              </Popup>
            </Marker>
          );
        }
        return null; // Skip markers with undefined coordinates
      });
    });
  
    return <>{markers}</>;
  };

  export default MarkersGroup;