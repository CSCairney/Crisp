import PanelContainer from "../../modules/common/components/PanelContainer";
import Map from "../../modules/mapSettings/components/Map";
import { useAppDispatch, useAppSelector } from "../../store";
import { getPersistedUserSettings } from "../../modules/login/store/actions/login";
import { getPersistedMapSettings } from "../../modules/mapSettings/store/actions/map";
import { selectAccessToken } from "../../modules/login/store/selectors/login";
import { fetchMarkerData } from "../../modules/mapSettings/store/actions/markers";
import { getPersistedDataSettings } from "../../modules/dataSelector/store/actions/data";
import { selectSelectedLayers } from "../../modules/dataSelector/store/selectors/dataSelectors";
import { fetchLayerNamesData } from "../../modules/dataSelector/store/actions/dataLayers";
import { useEffect } from "react";

const Home = () => {
  const accessToken = useAppSelector(selectAccessToken);
  const selectedLayers = useAppSelector(selectSelectedLayers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPersistedUserSettings());
    dispatch(getPersistedMapSettings());
    dispatch(getPersistedDataSettings());
  }, [dispatch]);

  useEffect(() => {
    if (accessToken) {
      dispatch(fetchLayerNamesData(accessToken));
    }
  }, [accessToken, selectedLayers, dispatch]);

  useEffect(() => {
    if (accessToken && selectedLayers) {
      dispatch(fetchMarkerData(accessToken, selectedLayers));
    }
  }, [accessToken, selectedLayers, dispatch]);
  return (
    <>
      <Map />
      <PanelContainer />
    </>
  );
};

export default Home;
