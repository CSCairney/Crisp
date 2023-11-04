import { setDataLayers, setLoading } from "..";
import { ActionWithThunk } from "../../../common/types/store";
import axios from "axios";

export const queryLayerNamesData = async (accessToken: string) => {
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  
    const response = await axios.get(`http://localhost:3000/layer/`, { headers: headers });
    return response.data;
  };
  
export const fetchLayerNamesData = (accessToken: string): ActionWithThunk => {
    return async (dispatch) => {
      dispatch(setLoading(true));
      try {
        const response = await queryLayerNamesData(accessToken);
        dispatch(setDataLayers(response.data));
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(setLoading(false));
      }
    };
  };