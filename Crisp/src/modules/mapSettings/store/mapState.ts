import { mapState } from "../types/map";

export function createInitialMapState(): mapState {
  return {
    polygons: {
      isLoading: false,
      error: null,
      data: null,
    },
    markers: {
      isLoading: false,
      error: null,
      data: null,
    },
    lines: {
      isLoading: false,
      error: null,
      data: null,
    },
  };
}
