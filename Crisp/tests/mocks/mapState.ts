import { mapState } from "../../src/modules/mapSettings/types/map";

export const mapMockState: mapState = {
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
      }
    };