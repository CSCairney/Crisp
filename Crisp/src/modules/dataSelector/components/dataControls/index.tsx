import React from "react";
import "./styles.scss";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { selectTempSelectedLayers } from "../../store/selectors/dataSelectors";
import { applySelectedLayers, resetSelectedLayers } from "../../store/actions/controls";
import { setPanelOpenStatus } from "../../../common/store";
import { panelTypes } from "../../../common/constants/menu";


const DataControls: React.FC = () => {
    const dispatch = useAppDispatch();
    const layerNames = useAppSelector(selectTempSelectedLayers);

    const applySelectedLayersHandler = () => {
        dispatch(applySelectedLayers(layerNames));
        dispatch(setPanelOpenStatus(panelTypes.None))
    }

    const resetSelectedLayersHandler = () => {
        dispatch(resetSelectedLayers());
    }

    return (
        <>
        <div className='data-controls'>
            <button className='data-controls__button--apply' onClick={applySelectedLayersHandler}>Apply</button>
            <button className='data-controls__button--reset' onClick={resetSelectedLayersHandler}>Reset</button>
        </div>
        </>
    );
    }

export default DataControls;