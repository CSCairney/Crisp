import React from "react";
import { FiArrowLeftCircle, FiSearch } from "react-icons/fi";
import "./styles.scss";
import SearchBar from "../../../common/components/SearchBar";

const SearchControls: React.FC = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = React.useState(false);

  const menuOpenHandler = () => {
    setIsSearchBarOpen(true)
  }

  const menuCloseHandler = () => {
    setIsSearchBarOpen(false)
  }

  if (isSearchBarOpen) return (
        <div className='search-controls--open'>
          <div className='search-controls__container'>
            <SearchBar />
            <button className="search-controls__button" onClick={() => menuCloseHandler()}>
              <FiArrowLeftCircle className='search-controls__icon' />
            </button>
          </div>
        </div>
    )

    return (
        <div className='search-controls--closed'>
          <button className="search-controls__button--closed" onClick={() => menuOpenHandler()}>
            <FiSearch className='search-controls__icon' />
          </button>
        </div>
  );
};

export default SearchControls;
