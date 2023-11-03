import { panelTypes } from "../constants/menu";

export const panelContainerTitleHandler  = (title: panelTypes) => {
    switch (title) {
        case panelTypes.Selection:
            return "Data Selection";
        case panelTypes.Filter:
            return "Filter Menu";
        case panelTypes.Views:
            return "Saved Views";
        default:
            return "Panel Container";
    }
}