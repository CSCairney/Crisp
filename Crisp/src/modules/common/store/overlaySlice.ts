import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createInitialOverlayState } from "./overlayState";
import { overlayState } from "../types/overlay";
import { panelTypes } from "../constants/menu";

const overlaySlice = createSlice({
    name: "overlayState",
    initialState: createInitialOverlayState(),
    reducers: {
    setOverlayState: (state, action: PayloadAction<overlayState>) => {
        state.menu = action.payload.menu;
        state.error = action.payload.error;
        state.isLoading = action.payload.isLoading;
    },
    setSidebarOpenStatus: (state, action: PayloadAction<boolean>) => {
        state.menu.isSidebarOpen = action.payload;
    },
    setPanelOpenStatus: (state, action: PayloadAction<panelTypes>) => {
        console.log("setPanelOpenStatus", action.payload);
        state.menu.panelOpen = action.payload;
    },
    }})

export default overlaySlice;