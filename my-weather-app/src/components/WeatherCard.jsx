import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const WeatherCard = () => {
  const [data, setData] = useState({
    celcius: 20,
    name: "London",
    humidity: 10,
    speed: 2,
  });

  useEffect(() => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Bangladesh&appid=0dae1862c032ae1b8a1ad79f0a3b3a6b&units=metric`;
    axios
      .get(apiURL)
      .then((res) => {
        setData({
          ...data,
          celcius: res.data.main.temp,
          name: res.data.name,
          humidity: res.data.main.humidity,
          speed: res.data.wind.speed,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="weather">
      <div className="Weather-info">
        <img className="weather-images" src="/public/Images/clear.png" alt="" />
        <h1>{Math.round(data.celcius)}°c</h1>
        <h2>{data.name}</h2>
        <div className="details">
          <div className="col">
            <img src="/public/Images/humidity.png" alt="" />
            <div>
              <p>{Math.round(data.humidity)}%</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="col">
            <img src="/public/Images/wind.png" alt="" />
            <div>
              <p>{Math.round(data.speed)}km/h</p>
              <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
