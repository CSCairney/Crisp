import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createInitialMapState } from "./mapState";
import { mapState, markerData } from "../types/map";

const mapSlice = createSlice({
    name: "mapState",
    initialState: createInitialMapState(),
    reducers: {
    setMapState: (state, action: PayloadAction<mapState>) => {
        state.lines = action.payload.lines;
        state.markers = action.payload.markers;
        state.polygons = action.payload.polygons;
    },
    setLinesLoading: (state, action: PayloadAction<boolean>) => {
        state.lines.isLoading = action.payload;
    },
    setMarkersLoading: (state, action) => {
        state.markers.isLoading = action.payload;
    },
    setPolygonsLoading: (state, action) => {
        state.polygons.isLoading = action.payload;
    },
    setMarkerData: (state, action: PayloadAction<markerData[]>) => {
        const layers = action.payload;
        state.markers.data = layers;
        }
    }})

export default mapSlice;