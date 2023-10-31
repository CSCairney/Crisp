import React, { useState } from "react";
import "./styles.scss";
import { useAppSelector } from "../../../../store";
import { selectMarkers } from "../../../mapSettings/store/selectors/markers";
import Results from "./Results";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchResults = useAppSelector(selectMarkers(searchTerm));

  return (
    <div className='search-bar'>
      <div className='search-bar__container'>
        <form className='search-bar__form'>
          <input className='search-bar__input' type='text' placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm((e.target.value).toLowerCase())} />
        </form>
        <div className='search-bar__results'>
          <ul>{searchTerm !== "" ? <Results searchResults={searchResults} /> : null}</ul>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
