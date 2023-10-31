import overlaySlice from "./overlaySlice";

export const {
    setOverlayState,
    setSidebarOpenStatus,
    setPanelOpenStatus
} = overlaySlice.actions;

export default overlaySlice.reducer;