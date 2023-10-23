import mapSlice from "./mapSlice";

export const {
    setLinesLoading,
    setMarkersLoading,
    setPolygonsLoading,
} = mapSlice.actions;

export default mapSlice.reducer;