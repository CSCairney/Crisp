import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../store";

export const selectMarkerState = (state: RootState) => state.mapState.markers;

export const selectMarkerLayers = createSelector(
  [selectMarkerState],
  (markerState) => {
    return markerState.data;
  }
);