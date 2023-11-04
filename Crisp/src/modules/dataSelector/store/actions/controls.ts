import { toast } from "sonner";
import { ActionWithThunk } from "../../../common/types/store";
import { setSelectedLayers, setTempSelectedLayers } from "..";

export const applySelectedLayers = (layerNames: string[]): ActionWithThunk => {
    return (dispatch) => {
        dispatch(setSelectedLayers(layerNames));
        toast.success('Layers applied');
    };
  };

  export const resetSelectedLayers = (): ActionWithThunk => {
    return (dispatch) => {
        dispatch(setSelectedLayers([]));
        dispatch(setTempSelectedLayers([]));
        toast.message('Layers Cleared');
    };
  };