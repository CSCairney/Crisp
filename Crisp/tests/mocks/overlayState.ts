import { panelTypes } from "../../src/modules/common/constants/menu";
import { overlayState } from "../../src/modules/common/types/overlay";

export const mapOverlayState: overlayState = {
    isLoading: false,
      error: "",
      menu: {
        isSidebarOpen: false,
        panelOpen: panelTypes.None
      }
    };