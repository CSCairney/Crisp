export type mapState = {
    polygons: {
        isLoading: boolean,
        error: string,
        data: [],
      },
      markers: {
        isLoading: boolean,
        error: string,
        data: markerData[],
      },
      lines: {
        isLoading: boolean,
        error: string,
        data: [],
      }
}

export type markerResponse = {
  data: markerData[],
  status: boolean,
}

export type markerData = {
  details: [],
  grouptype: string,
  layer_id: number,
  layer: string,
  maptype: string,
}