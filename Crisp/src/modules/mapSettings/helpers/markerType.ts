import { markerTypes } from "../contants/markertypes"

export const markerTypeIentifier = (markerType: string) => {
    switch (markerType) {
        case markerTypes.SPORTS:
            return "sports"
        case markerTypes.TOURISM:
            return "tourism"
        case markerTypes.ENTERTAINMENT:
            return "entertainment"
        case markerTypes.LOCATIONS:
            return "locations"
        default:
            return ""
    }
}