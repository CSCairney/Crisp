import React from "react";
import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { selectTempSelectedLayers } from "../../store/selectors/dataSelectors";
import { setSelectedLayers } from "../../store";
import { toast } from "sonner";


const DataControls: React.FC = () => {
    const dispatch = useAppDispatch();
    const layerNames = useAppSelector(selectTempSelectedLayers);

    const applySelectedLayersHandler = () => {
      dispatch(setSelectedLayers(layerNames));
      toast.success('Layers applied');
    };

    const resetSelectedLayersHandler = () => {
        dispatch(setSelectedLayers([]));
        toast.message('Layers Cleared');
        };

    return (
        <>
        <div className='data-controls'>
            <button className='data-controls__button--apply' onClick={() => applySelectedLayersHandler()}>Apply</button>
            <button className='data-controls__button--reset' onClick={() => resetSelectedLayersHandler()}>Reset</button>
        </div>
        </>
    );
    }

export default DataControls;