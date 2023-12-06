import { LatLng } from "leaflet"
import { useState } from "react"
import { Marker, Popup, useMapEvents } from "react-leaflet"

export function LocationMarker() {
    const [position, setPosition] = useState<LatLng>()
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    if (position) return  (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )

    return null
  }