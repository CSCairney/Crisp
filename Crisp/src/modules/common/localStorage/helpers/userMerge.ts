import merge from "lodash/merge";

import { DeepPartial } from "../../../common/types/utils";
import { authenticationViewMode } from "../../../login/contants/login";
import { userState } from "../../../login/types/users";
import { settingsPersistenceService } from "../../../common/localStorage/persistence";

export function createDefaultUserSettings(): userState {
  return {
    isLoading: false,
    viewMode: authenticationViewMode.LOGIN,
    errorMessage: "",
    user: {
        age: 0,
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        role: "",
        username: "",
        user_id: "",
      },
    accessToken: ""
    } 
  }

export function createMergedUserSettings(
  defaultUserSettings: userState,
  persistedUserSettings?: DeepPartial<userState>
): userState {
  const mergedSettings: userState = merge(
    defaultUserSettings,
    persistedUserSettings
  );

  return {
    ...mergedSettings,
  };
}

export function createUserSettings(): userState {
  const defaultUserSettings: userState =
    createDefaultUserSettings();
  const persistedData =
    settingsPersistenceService.getUserSettings();

  if (persistedData !== null) {
    return createMergedUserSettings(
      defaultUserSettings,
      persistedData
    );
  }
  return defaultUserSettings;
}
