import React from "react";
import "./styles.scss";
import { markerData } from "../../types/map";
import MarkerCustom from "../MarkerCustom";
import { toast } from "sonner";

type MarkersGroupProps = {
    layers: markerData[];
};

const MarkersGroup: React.FC<MarkersGroupProps> = ({layers}) => {
    console.log("layers")
    console.table(layers)
    if (layers.length > 1) {
        layers.flatMap((markerLayer) => {
            markerLayer.details.map((marker) => {
                return (
                    <>
                        <MarkerCustom layer={marker} />
                    </>
                )
            });
          });
    }
    return (
        toast.error("No markers found")
    );
  };

  export default MarkersGroup;