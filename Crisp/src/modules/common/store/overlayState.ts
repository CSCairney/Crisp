import { panelTypes } from "../constants/menu";
import { overlayState } from "../types/overlay";

export function createInitialOverlayState(): overlayState {
  return {
      isLoading: false,
      error: "",
      menu: {
        isSidebarOpen: false,
        panelOpen: panelTypes.None
      }
  };
}
