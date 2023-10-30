import { markerResponse } from "../../types/map";
import { setMarkerData, setMarkersLoading } from "..";
import { ActionWithThunk } from "../../../common/types/store";
import axios from "axios";

export const queryMarkerData = async (accessToken: string) => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await axios.get("http://localhost:3000/layer/all", { headers: headers });
  return response.data;
};

export const fetchMarkerData = (accessToken: string): ActionWithThunk => {
  return async (dispatch) => {
    dispatch(setMarkersLoading(true));
    try {
      const response: markerResponse = await queryMarkerData(accessToken);
      const markerLayers = response.data.filter((layer) => layer.maptype === 'Marker');
      console.log(markerLayers);
      dispatch(setMarkerData(markerLayers));
    } catch (error) {
      // Handle error if the request fails
      console.error(error);
    } finally {
      dispatch(setMarkersLoading(false));
    }
  };
};
