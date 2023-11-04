import React from "react";
import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { selectTempSelectedLayers } from "../../store/selectors/dataSelectors";
import { setSelectedLayers } from "../../store";


const DataControls: React.FC = () => {
    const dispatch = useAppDispatch();
    const layerNames = useAppSelector(selectTempSelectedLayers);

    const applySelectedLayersHandler = () => {
      dispatch(setSelectedLayers(layerNames));
    };

    const resetSelectedLayersHandler = () => {
        dispatch(setSelectedLayers([]));
        };

    return (
        <>
        <div className='data-controls'>
            <button className='data-controls__button' onClick={() => applySelectedLayersHandler()}>Apply</button>
            <button className='data-controls__button' onClick={() => resetSelectedLayersHandler()}>Reset</button>
        </div>
        </>
    );
    }

export default DataControls;