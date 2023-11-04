import { markerData } from "../../types/map";
import { setMarkerData, setMarkersLoading } from "..";
import { ActionWithThunk } from "../../../common/types/store";
import axios from "axios";

export const queryMarkerData = async (accessToken: string, layerName: string) => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await axios.get(`http://localhost:3000/layer/${layerName}`, { headers: headers });
  return response.data;
};

export const fetchMarkerData = (accessToken: string, mapTypes: string[]): ActionWithThunk => {
  return async (dispatch) => {
    dispatch(setMarkersLoading(true));
    const markerData: markerData[] = [];

    try {
      for (const mapType of mapTypes) {
        const response = await queryMarkerData(accessToken, mapType);
        markerData.push(response.data);
      }
      dispatch(setMarkerData(markerData.flat())); // Flatten the array of arrays into a single array
    } catch (error) {
      // Handle error if any individual request fails
      console.error(error);
    } finally {
      dispatch(setMarkersLoading(false));
    }
  };
};
