import React from "react";
import { selectPanelStatus } from "../../store/selectors/menu";
import DataSelector from "../../../dataSelector/components";
import { useAppSelector } from "../../../../store";
import { panelContainerTitleHandler } from "../../helpers/panelContainer";
import { panelTypes } from "../../constants/menu";
import "./styles.scss";

const PanelContainer: React.FC = () => {
    const activePanel = useAppSelector(selectPanelStatus);
    const title = panelContainerTitleHandler(activePanel);

    if (activePanel !== panelTypes.None) return (
        <div className='panel-container'>
            <div className='panel-container__header'>
                <p className='panel-container__title'><strong>{title}</strong></p>
            </div>
            <div className='panel-container__body'>
                {(activePanel === panelTypes.Selection) && <DataSelector />}
            </div>
        </div>
    )
    else return null;
}

export default PanelContainer;