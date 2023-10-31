import React from "react";
import "./styles.scss";
import { markerData } from "../../types/map";
import MarkerCustom from "../MarkerCustom";
import { toast } from "sonner";

type MarkersGroupProps = {
  layers: markerData[];
};

const MarkersGroup: React.FC<MarkersGroupProps> = ({ layers }) => {
  console.log("layers");
  console.table(layers);

  const markers = layers.flatMap((markerLayer) => {
    return markerLayer.details.map((marker) => {
      return <MarkerCustom key={marker.markerName} layer={marker} />;
    });
  });

  if (markers.length > 0) {
    return <>{markers}</>;
  } else {
    toast.error("No markers found");
    return null; // or return a message like <div>No markers found</div>
  }
};

export default MarkersGroup;
