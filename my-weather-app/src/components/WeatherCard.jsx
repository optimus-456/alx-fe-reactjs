import React from "react";

const WeatherCard = () => {
  return (
    <div className="weather">
      <div className="Weather-info">
        <img className="weather-images" src="/public/Images/clear.png" alt="" />
        <h1>22°c</h1>
        <h2>New York</h2>
        <div className="details">
          <div className="col">
            <img src="/public/Images/humidity.png" alt="" />
            <div>
              <p>20%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="col">
            <img src="/public/Images/wind.png" alt="" />
            <div>
              <p>14km/h</p>
              <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
