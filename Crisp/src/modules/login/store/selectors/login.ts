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
    return userState.users.some((user) => user.username === userInfo.username);
  }
);

export const selectActiveUserInfo = createSelector(
  [selectUserState],
  (userState) => {
    if (userState.activeUserId !== "") {
      return userState.users.find(
        (user) => user.id === userState.activeUserId
      );
    }
    return false;
  }
);
