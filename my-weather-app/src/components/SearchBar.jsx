import React, { useState } from "react";
import WeatherCard from "./WeatherCard";

const SearchBar = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("Nigeria");

  const handleClick = () => {
    setLocation(name); // Updates the location state with the entered city name
  };

  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          placeholder="Enter City Name"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleClick}>
          <img
            src="/Images/search.png"
            alt="search"
            style={{ width: "30px", height: "30px" }}
          />
        </button>
      </div>
      <WeatherCard location={location} />
    </div>
  );
};

export default SearchBar;
