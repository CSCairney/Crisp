import mapSlice from "./mapSlice";

export const {
    setLinesLoading,
    setMarkersLoading,
    setPolygonsLoading,
    setMapState
} = mapSlice.actions;

export default mapSlice.reducer;