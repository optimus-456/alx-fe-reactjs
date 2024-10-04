import React from "react";
import WeatherCard from "./WeatherCard";

const SearchBar = () => {
  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          placeholder="Enter City Name"
          //   onChange={(e) => setName(e.target.value)}
        />
        <button>
          <img
            src="/public/Images/search.png"
            alt="image"
            style={{ width: "30px", height: "30px" }}
            // onClick={handleClick}
          />
        </button>
      </div>
      <WeatherCard />
    </div>
  );
};

export default SearchBar;
