import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createInitialDataState } from "./dataState";
import { dataState } from "../types/data";

const dataSlice = createSlice({
    name: "dataState",
    initialState: createInitialDataState(),
    reducers: {
    setDataState: (state, action: PayloadAction<dataState>) => {
        state.tempSelectedLayers = action.payload.tempSelectedLayers;
        state.selectedLayers = action.payload.selectedLayers;
    },
    setTempSelectedLayers: (state, action: PayloadAction<string[]>) => {
        state.tempSelectedLayers = action.payload;
    },
    setSelectedLayers: (state, action: PayloadAction<string[]>) => {
        state.selectedLayers = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
        state.error = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
        state.isLoading = action.payload;
    },
    setDataLayers: (state, action: PayloadAction<string[]>) => {
        state.dataLayers = action.payload;
    }
    }})

export default dataSlice;