import { panelTypes } from "../constants/menu"

export type overlayState = {
    isLoading: boolean,
    error: string,
    menu: {
        isSidebarOpen: boolean,
        panelOpen: panelTypes
      }
}