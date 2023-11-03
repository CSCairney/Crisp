import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { settingsPersistenceService } from "../localStorage/persistence";
import { RootState } from "~/store";
import { clearUser, setUser, setUserJWT, setUserState, setViewMode } from "../../login/store";
import { setLinesLoading, setMarkersLoading, setPolygonsLoading } from "../../mapSettings/store";
import { setChoosenLayerNames, setTempLayerNames } from "../../dataSelector/store";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    matcher: isAnyOf(
      setViewMode,
      setUser,
      clearUser,
      setUserState,
      setUserJWT
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

  listenerMiddleware.startListening({
    matcher: isAnyOf(
      setTempLayerNames,
      setChoosenLayerNames
    ),
    effect: (_action, listenerApi) => {
      try {
        settingsPersistenceService.setDataSettings(
          (listenerApi.getState() as RootState).dataState
        );
      } catch (error) {
        console.error(error);
      }
    },
  });