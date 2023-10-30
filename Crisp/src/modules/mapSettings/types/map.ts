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

export type markerDetail = {
  coordinate: {
    lat: number,
    lng: number,
  }
  markerName: string,
  observations: string[],
}

export type markerData = {
  details: markerDetail[],
  grouptype: string,
  layer_id: number,
  layer: string,
  maptype: string,
}