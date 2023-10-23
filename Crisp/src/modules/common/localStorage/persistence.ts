import { userState } from "src/modules/login/types/users";
import { LocalStorageKeys } from "../constants/localStorage";
import { DeepPartial } from "@reduxjs/toolkit";

export const settingsPersistenceService = {
    setUserSettings: (
      userSettings: userState
    ): void =>
      localStorage.setItem(
        LocalStorageKeys.userSettings,
        JSON.stringify(userSettings)
      ),
    getUserSettings: (): DeepPartial<userState> =>
      JSON.parse(
        localStorage.getItem(LocalStorageKeys.userSettings) || "null"
      ),
}