import { ActionWithThunk } from "../../../common/types/store";
import { setMapState } from "..";
import { createMapSettings } from "../helpers/map";

export const getPersistedMapSettings = (): ActionWithThunk => {
    const mapSettings = createMapSettings();
    return (dispatch) => {
      dispatch(setMapState(mapSettings));
    };
  };