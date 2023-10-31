import { panelTypes } from "../constants/menu";
import { overlayState } from "../types/overlay";

export function createInitialMapState(): overlayState {
  return {
      isLoading: false,
      error: "",
      menu: {
        isSidebarOpen: false,
        panelOpen: panelTypes.None
      }
  };
}
