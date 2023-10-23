import merge from "lodash/merge";

import { DeepPartial } from "../../../common/types/utils";
import { mapState } from "../../../mapSettings/types/map";
import { settingsPersistenceService } from "../../../common/localStorage/persistence";

export function createDefaultMapSettings(): mapState {
  return {
    polygons: {
        isLoading: false,
        error: null,
        data: null,
      },
      markers: {
        isLoading: false,
        error: null,
        data: null,
      },
      lines: {
        isLoading: false,
        error: null,
        data: null,
      },
    }
  }

export function createMergedMapSettings(
  defaultMapSettings: mapState,
  persistedMapSettings?: DeepPartial<mapState>
): mapState {
  const mergedSettings: mapState = merge(
    defaultMapSettings,
    persistedMapSettings
  );

  return {
    ...mergedSettings,
  };
}

export function createMapSettings(): mapState {
  const defaultMapSettings: mapState =
    createDefaultMapSettings();
  const persistedData =
    settingsPersistenceService.getMapSettings();

  if (persistedData !== null) {
    return createMergedMapSettings(
        defaultMapSettings,
      persistedData
    );
  }
  return defaultMapSettings;
}
