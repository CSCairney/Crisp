import React from "react";
import { markerDetail } from "../../../../mapSettings/types/map";
import "./styles.scss";

type ResultsProps = {
    searchResults: markerDetail[];
    };

const Results: React.FC<ResultsProps> = ({ searchResults }) => {

    const resultHandler = (e: React.MouseEvent<HTMLLIElement>) => {
        console.log(e.currentTarget);
    }

  return (
    <ul>
      {searchResults.slice(0,5).map((result) => {
        return (
          <li key={result.markerName} onClick={resultHandler} className="result">
            <ul>
              <li>
                <strong>{result.markerName}</strong>
              </li>
              <li>
                Coords: {result.coordinate.lat}, {result.coordinate.long}
              </li>
              {/* <li>
                Observations:{" "}
                {result.observations.map((observation) => {
                  return <p key={observation}>{observation}</p>;
                })}
              </li> */}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default Results;
