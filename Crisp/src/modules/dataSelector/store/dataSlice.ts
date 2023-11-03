import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createInitialDataState } from "./dataState";
import { dataState } from "../types/data";

const dataSlice = createSlice({
    name: "dataState",
    initialState: createInitialDataState(),
    reducers: {
    setDataState: (state, action: PayloadAction<dataState>) => {
        state.choosenLayerNames = action.payload.choosenLayerNames;
        state.tempLayerNames = action.payload.tempLayerNames;
    },
    setTempLayerNames: (state, action: PayloadAction<string[]>) => {
        state.tempLayerNames = action.payload;
    },
    setChoosenLayerNames: (state, action: PayloadAction<string[]>) => {
        state.choosenLayerNames = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
        state.error = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
        state.isLoading = action.payload;
    },
    }})

export default dataSlice;