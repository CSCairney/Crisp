import { dataState } from "../types/data";

export function createInitialDataState(): dataState {
  return {
    isLoading: false,
    error: "",
    dataLayers: [],
    tempSelectedLayers: [],
    selectedLayers: [],
  };
}
