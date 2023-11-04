import dataSlice from "./dataSlice";

export const {
    setLoading,
    setError,
    setTempSelectedLayers,
    setSelectedLayers,
    setDataLayers,
    setDataState,
    toggleTempSelectedLayer
} = dataSlice.actions;

export default dataSlice.reducer;