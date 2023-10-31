import React from "react";
import { markerDetail } from "../../../../mapSettings/types/map";

type ResultsProps = {
    searchResults: markerDetail[];
    };

const Results: React.FC<ResultsProps> = ({ searchResults }) => {
  return (
    <ul>
      {searchResults.map((result) => {
        return (
          <li key={result.markerName}>
            <ul>
              <li>
                <strong>{result.markerName}</strong>
              </li>
              <li>
                Coords: {result.coordinate.lat}, {result.coordinate.long}
              </li>
              <li>
                Observations:{" "}
                {result.observations.map((observation) => {
                  return <p key={observation}>{observation}</p>;
                })}
              </li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default Results;
