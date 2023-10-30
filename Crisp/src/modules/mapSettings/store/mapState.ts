import { mapState } from "../types/map";

export function createInitialMapState(): mapState {
  return {
    polygons: {
      isLoading: false,
      error: "",
      data: [],
    },
    markers: {
      isLoading: false,
      error: "",
      data: [],
    },
    lines: {
      isLoading: false,
      error: "",
      data: [],
    },
  };
}
