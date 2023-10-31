import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../../store";

export const selectMenuState = (state: RootState) => state.overlayState.menu;

export const selectSidebarStatus = createSelector(
  [selectMenuState],
  (menuState) => {
    return menuState.isSidebarOpen;
  }
);

export const selectPanelStatus = createSelector(
    [selectMenuState],
    (menuState) => {
        return menuState.panelOpen;
    }
);