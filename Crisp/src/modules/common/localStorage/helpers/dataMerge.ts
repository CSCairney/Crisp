import merge from "lodash/merge";

import { DeepPartial } from "../../../common/types/utils";
import { dataState } from "../../../dataSelector/types/data";
import { settingsPersistenceService } from "../../../common/localStorage/persistence";

export function createDefaultDataSettings(): dataState {
  return {
    isLoading: false,
    error: "",
    dataLayers: [],
    tempSelectedLayers: [],
    selectedLayers: [],
  }
}

export function createMergedDataSettings(
  defaultDataSettings: dataState,
  persistedDataSettings?: DeepPartial<dataState>
): dataState {
  const mergedSettings: dataState = merge(
    defaultDataSettings,
    persistedDataSettings
  );

  return {
    ...mergedSettings,
  };
}

export function createDataSettings(): dataState {
  const defaultDataSettings: dataState =
    createDefaultDataSettings();
  const persistedData =
    settingsPersistenceService.getDataSettings();

  if (persistedData !== null) {
    return createMergedDataSettings(
        defaultDataSettings,
      persistedData
    );
  }
  return defaultDataSettings;
}
