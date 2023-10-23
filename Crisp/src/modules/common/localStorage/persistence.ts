import { userState } from "src/modules/login/types/users";
import { LocalStorageKeys } from "../constants/localStorage";
import { DeepPartial } from "@reduxjs/toolkit";
import { mapState } from "../../mapSettings/types/map";

export const settingsPersistenceService = {
  // User Settings
  setUserSettings: (userSettings: userState): void => localStorage.setItem(LocalStorageKeys.userSettings, JSON.stringify(userSettings)),
  getUserSettings: (): DeepPartial<userState> => JSON.parse(localStorage.getItem(LocalStorageKeys.userSettings) || "null"),
  // Map Settings
  setMapSettings: (mapSettings: mapState): void => localStorage.setItem(LocalStorageKeys.mapSettings, JSON.stringify(mapSettings)),
  getMapSettings: (): DeepPartial<mapState> => JSON.parse(localStorage.getItem(LocalStorageKeys.mapSettings) || "null"),
};
