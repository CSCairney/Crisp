import { mapState } from "../../src/modules/mapSettings/types/map";

export const mapMockState: mapState = {
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
      }
    };