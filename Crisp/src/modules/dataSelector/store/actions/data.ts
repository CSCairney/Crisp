import { createDataSettings } from "../../../common/localStorage/helpers/dataMerge";
import { setDataState } from "..";
import { ActionWithThunk } from "../../../common/types/store";

export const getPersistedDataSettings = (): ActionWithThunk => {
    const dataSettings = createDataSettings();
    return (dispatch) => {
      dispatch(setDataState(dataSettings));
    };
  };