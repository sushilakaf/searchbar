import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export const Searchtype = () => {
  return (
    <div className="main-container">
      <div className="search-item">
        <input type="text" placeholder="search anything"  className="searchbar"/>
        <SearchIcon className="searchicon" />
      </div>
    </div>
  );
};
