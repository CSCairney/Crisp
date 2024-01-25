import { userState } from "src/modules/login/types/users";
import { LocalStorageKeys } from "../constants/localStorage";
import { DeepPartial } from "@reduxjs/toolkit";
import { mapState } from "../../mapSettings/types/map";
import { dataState } from "../../dataSelector/types/data";
import { blogState } from "../../blog/types/blogs"

export const settingsPersistenceService = {
  // User Settings
  setUserSettings: (userSettings: userState): void => localStorage.setItem(LocalStorageKeys.userSettings, JSON.stringify(userSettings)),
  getUserSettings: (): DeepPartial<userState> => JSON.parse(localStorage.getItem(LocalStorageKeys.userSettings) || "null"),
  // Map Settings
  setMapSettings: (mapSettings: mapState): void => localStorage.setItem(LocalStorageKeys.mapSettings, JSON.stringify(mapSettings)),
  getMapSettings: (): DeepPartial<mapState> => JSON.parse(localStorage.getItem(LocalStorageKeys.mapSettings) || "null"),
  // Data Settings
  setDataSettings: (dataSettings: dataState): void => localStorage.setItem(LocalStorageKeys.dataSettings, JSON.stringify(dataSettings)),
  getDataSettings: (): DeepPartial<dataState> => JSON.parse(localStorage.getItem(LocalStorageKeys.dataSettings) || "null"),
  // Blog Settings
  setBlogSettings: (blogSettings: blogState): void => localStorage.setItem(LocalStorageKeys.blogSettings, JSON.stringify(blogSettings)),
  getBlogSettings: (): DeepPartial<blogState> => JSON.parse(localStorage.getItem(LocalStorageKeys.blogSettings) || "null"),
};
