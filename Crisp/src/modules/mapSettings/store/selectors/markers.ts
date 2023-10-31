import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../store";
import { markerDetail } from "../../types/map";

export const selectMarkerState = (state: RootState) => state.mapState.markers;

export const selectMarkerLayers = createSelector(
  [selectMarkerState],
  (markerState) => {
    return markerState.data;
  }
);

export const selectMarkers = (name: string) => createSelector(
  [selectMarkerState],
  (markerState) => {
    const uniqueMarkerNames: Set<string> = new Set(); // Use a Set to keep track of unique marker names
    const markers: markerDetail[] = [];

    markerState.data.forEach((layer) => {
      layer.details.forEach((detail) => {
        if (detail.markerName.toLowerCase().includes(name) && !uniqueMarkerNames.has(detail.markerName.toLowerCase())) {
          // Check if marker name includes the search string and is not already in the Set
          markers.push(detail);
          uniqueMarkerNames.add(detail.markerName.toLowerCase()); // Add the marker name to the Set to track duplicates
        }
      });
    });
    
    return markers;
  }
);
