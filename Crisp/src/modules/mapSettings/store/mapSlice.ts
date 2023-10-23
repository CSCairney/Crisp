import { createSlice } from "@reduxjs/toolkit";
import { createInitialMapState } from "./mapState";

const mapSlice = createSlice({
    name: "mapState",
    initialState: createInitialMapState(),
    reducers: {
    setLinesLoading: (state, action) => {
        state.lines.isLoading = action.payload;
    },
    setMarkersLoading: (state, action) => {
        state.markers.isLoading = action.payload;
    },
    setPolygonsLoading: (state, action) => {
        state.polygons.isLoading = action.payload;
    }
}
})

export default mapSlice;