import React from "react";
import { FiArrowLeftCircle, FiSearch } from "react-icons/fi";
import "./styles.scss";
import SearchBar from "../../../common/components/SearchBar";
import Tooltip from "../../../common/components/Tooltip";
import { TooltipPlacements, TooltipThemes } from "../../../common/types/tooltip";

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
        <Tooltip tooltipContent="Close Search Bar" placement={TooltipPlacements.Top} theme={TooltipThemes.Light}>
          <button className="search-controls__button" onClick={() => menuCloseHandler()}>
            <FiArrowLeftCircle className='search-controls__icon' />
          </button>
        </Tooltip>
      </div>
    </div>
  )

  return (
    <div className='search-controls--closed'>
      <Tooltip tooltipContent="Open Search Bar" placement={TooltipPlacements.Top} theme={TooltipThemes.Light}>
        <button className="search-controls__button--closed" onClick={() => menuOpenHandler()}>
          <FiSearch className='search-controls__icon' />
        </button>
      </Tooltip>

    </div>
  );
};

export default SearchControls;
