import dataSlice from "./dataSlice";

export const {
    setLoading,
    setError,
    setChoosenLayerNames,
    setTempLayerNames,
} = dataSlice.actions;

export default dataSlice.reducer;