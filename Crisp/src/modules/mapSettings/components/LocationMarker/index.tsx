import React from "react"
import { Marker, Popup } from "react-leaflet"
import { selectCurrentLocation } from "../../../login/store/selectors/login";
import { useAppSelector } from "../../../../store";

 const LocationMarker:React.FC = () => {
    const currentLocation = useAppSelector(selectCurrentLocation);

    if (currentLocation) return  (
      <Marker position={currentLocation}>
        <Popup>You are here</Popup>
      </Marker>
    )

    return null
  }

  export default LocationMarker;