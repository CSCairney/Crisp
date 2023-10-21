import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { settingsPersistenceService } from "../localStorage/persistence";
import { RootState } from "~/store";
import { setUser, setUsers, setViewMode } from "~/modules/login/store";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: isAnyOf(
      setViewMode,
      setUser,
      setUsers
    ),
    effect: (_action, listenerApi) => {
      try {
        settingsPersistenceService.setUserSettings(
          (listenerApi.getState() as RootState).userState
        );
      } catch (error) {
        console.error(error);
      }
    },
  });