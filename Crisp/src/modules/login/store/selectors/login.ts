import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "~/store";

export const selectUserState = (state: RootState) => state.userState;

export const selectLoginViewMode = createSelector(
  [selectUserState],
  (userState) => {
    return userState.viewMode;
  }
);