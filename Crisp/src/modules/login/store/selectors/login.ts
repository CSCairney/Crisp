import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../../../store";
import { userInfo } from "../../types/users";

export const selectUserState = (state: RootState) => state.userState;

export const selectLoginViewMode = createSelector(
  [selectUserState],
  (userState) => {
    return userState.viewMode;
  }
);

export const selectHasUser = (userInfo: userInfo) => createSelector(
  [selectUserState],
  (userState) => {
    return userState.user.username === userInfo.username;
  }
);

export const selectActiveUserInfo = createSelector(
  [selectUserState],
  (userState) => {
    return userState.user;
  }
);

export const selectAccessToken = createSelector(
  [selectUserState],
  (userState) => {
    return userState.accessToken;
  }
);

export const selectCurrentLocation = createSelector(
  [selectUserState],
  (userState) => {
    return userState.currentLocation;
  }
);
