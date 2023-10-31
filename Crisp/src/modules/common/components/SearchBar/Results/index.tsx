import React from "react";
import { markerDetail } from "../../../../mapSettings/types/map";
import "./styles.scss";
import { useMap } from "react-leaflet";

type ResultsProps = {
    searchResults: markerDetail[];
    };

const Results: React.FC<ResultsProps> = ({ searchResults }) => {
  const map = useMap();
  

    const resultHandler = (coordinate: [number, number]) => {
      map.panTo(coordinate)
    }

  return (
    <ul>
      {searchResults.slice(0,5).map((result) => {
        return (
          <li key={result.markerName} onClick={() => resultHandler([result.coordinate.lat, result.coordinate.long])} className="result">
            <ul>
              <li>
                <strong>{result.markerName}</strong>
              </li>
              <li>
                Coords: {result.coordinate.lat}, {result.coordinate.long}
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default Results;
