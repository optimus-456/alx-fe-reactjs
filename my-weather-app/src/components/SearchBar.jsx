import React from "react";
import WeatherCard from "./WeatherCard";

const SearchBar = () => {
  return (
    <div className="container">
      <div className="search">
        <input type="text" placeholder="Enter City Name" />
        <button>
          <img
            src="/public/Images/search.png"
            alt="image"
            style={{ width: "30px", height: "30px" }}
          />
        </button>
      </div>
      <WeatherCard />
    </div>
  );
};

export default SearchBar;
