import { setMarkersLoading } from "..";
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
      const data = await queryMarkerData(accessToken);
      console.log(data);
      // Dispatch your action with the data if needed
    } catch (error) {
      // Handle error if the request fails
      console.error(error);
    } finally {
      dispatch(setMarkersLoading(false));
    }
  };
};
