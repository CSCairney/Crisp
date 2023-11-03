import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../../store";

export const selectDataState = (state: RootState) => state.dataState;

export const selectDataLayers = createSelector(
  [selectDataState],
  (state) => {
    return state.dataLayers;
  }
);

export const selectDataLayersLoading = createSelector(
    [selectDataState],
    (state) => {
        return state.isLoading;
    }
);

export const selectDataLayersError = createSelector(
    [selectDataState],
    (state) => {
        return state.error;
    }
);

export const selectTempSelectedLayers = createSelector(
    [selectDataState],
    (state) => {
        return state.tempSelectedLayers;
    }
);

export const selectSelectedLayers = createSelector(
    [selectDataState],
    (state) => {
        return state.selectedLayers;
    }
);



