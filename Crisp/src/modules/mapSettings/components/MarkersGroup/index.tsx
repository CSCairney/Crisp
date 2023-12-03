import React from "react";
import "./styles.scss";
import { markerData } from "../../types/map";
import MarkerCustom from "../MarkerCustom";

type MarkersGroupProps = {
  layers: markerData[];
};

const MarkersGroup: React.FC<MarkersGroupProps> = ({ layers }) => {
  
  const markers = layers.flatMap((markerLayer, x) => {
    return markerLayer.details.map((marker) => {
      return <MarkerCustom key={`Marker ID: ${x} - ${marker.markerName}`} layer={marker} type={markerLayer.grouptype} />;
    });
  });

  if (markers.length > 0) {
    return <>{markers}</>;
  } else {
    return null; // or return a message like <div>No markers found</div>
  }
};

export default MarkersGroup;
