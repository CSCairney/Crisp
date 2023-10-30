import mapSlice from "./mapSlice";

export const {
    setLinesLoading,
    setMarkersLoading,
    setPolygonsLoading,
    setMapState,
    setMarkerData
} = mapSlice.actions;

export default mapSlice.reducer;