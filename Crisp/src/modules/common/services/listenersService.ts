import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { settingsPersistenceService } from "../localStorage/persistence";
import { RootState } from "~/store";
import { authUser, setUser, setUsers, setViewMode } from "../../login/store";
import { setLinesLoading, setMarkersLoading, setPolygonsLoading } from "../../mapSettings/store";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: isAnyOf(
      setViewMode,
      setUser,
      setUsers,
      authUser,
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

  listenerMiddleware.startListening({
    matcher: isAnyOf(
      setLinesLoading,
      setMarkersLoading,
      setPolygonsLoading
    ),
    effect: (_action, listenerApi) => {
      try {
        settingsPersistenceService.setMapSettings(
          (listenerApi.getState() as RootState).mapState
        );
      } catch (error) {
        console.error(error);
      }
    },
  });