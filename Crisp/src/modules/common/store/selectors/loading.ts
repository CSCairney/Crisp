import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "~/store";

export const selectLoadingDataState = (state: RootState) =>
  state.dataState.isLoading;
export const selectLoadingLineState = (state: RootState) =>
    state.mapState.lines.isLoading;
export const selectLoadingMarkerState = (state: RootState) =>
    state.mapState.markers.isLoading;
export const selectLoadingPolygonState = (state: RootState) =>
    state.mapState.polygons.isLoading;
export const selectLoadingOverlayState = (state: RootState) =>
    state.overlayState.isLoading;
export const selectLoadingTeamState = (state: RootState) =>
    state.teamState.isLoading;
export const selectLoadingUserState = (state: RootState) =>
    state.userState.isLoading;

export const selectLoadingState = createSelector(
  [
    selectLoadingDataState,
    selectLoadingLineState,
    selectLoadingMarkerState,
    selectLoadingPolygonState,
    selectLoadingOverlayState,
    selectLoadingTeamState,
    selectLoadingUserState
  ],
  (
    dataLoading,
    lineLoading,
    markerLoading,
    polygonLoading,
    overlayLoading,
    teamLoading,
    userLoading
  ) => {
    const loadingStates = [
      dataLoading,
      lineLoading,
      markerLoading,
      polygonLoading,
      overlayLoading,
      teamLoading,
      userLoading
    ];

    if (loadingStates.some(Boolean)) {
      return true
    }
    return false;
  }
);