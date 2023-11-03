import { dataState } from "../types/data";

export function createInitialDataState(): dataState {
  return {
      isLoading: false,
      error: "",
      tempLayerNames: [],
      choosenLayerNames: [],
  };
}
