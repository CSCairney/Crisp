import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "~/store";
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
    return userState.user.info.username === userInfo.username;
  }
);

export const selectActiveUserInfo = createSelector(
  [selectUserState],
  (userState) => {
    return userState.user.info;
  }
);
