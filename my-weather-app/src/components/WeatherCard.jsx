import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorMessage from "./ErrorMessage"; // Import ErrorMessage

const WeatherCard = ({ location }) => {
  const [data, setData] = useState({
    celcius: 20,
    location: "Nigeria",
    humidity: 10,
    speed: 2,
    image: "",
  });
  const [error, setError] = useState(null); // State to track errors

  useEffect(() => {
    if (location !== "") {
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0dae1862c032ae1b8a1ad79f0a3b3a6b&units=metric`;
      axios
        .get(apiURL)
        .then((res) => {
          let imagePath = "";
          if (res.data.weather[0].main === "Clouds") {
            imagePath = "/Images/cloud.png";
          } else if (res.data.weather[0].main === "Clear") {
            imagePath = "/Images/clear.png";
          } else if (res.data.weather[0].main === "Rain") {
            imagePath = "/Images/rain.png";
          } else if (res.data.weather[0].main === "Drizzle") {
            imagePath = "/Images/drizzle.png";
          } else if (res.data.weather[0].main === "Mist") {
            imagePath = "/Images/mist.png";
          } else if (res.data.weather[0].main === "Snow") {
            imagePath = "/Images/snow.png";
          }

          setData({
            celcius: res.data.main.temp,
            location: res.data.name,
            humidity: res.data.main.humidity,
            speed: res.data.wind.speed,
            image: imagePath,
          });
          setError(null); // Reset error state on successful response
        })
        .catch((err) => {
          console.error(err);
          setError("Invalid entry."); // Set error message
        });
    }
  }, [location]);

  return (
    <div className="weather">
      {error ? ( //ErrorMessage if there's an error
        <ErrorMessage message={error} />
      ) : (
        <div className="Weather-info">
          <img className="weather-images" src={data.image} alt="" />
          <h1>{Math.round(data.celcius)}°c</h1>
          <h2>{data.location}</h2>
          <div className="details">
            <div className="col">
              <img src="/Images/humidity.png" alt="" />
              <div>
                <p>{Math.round(data.humidity)}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img
                src="
              /Images/wind.png"
                alt=""
              />
              <div>
                <p>{Math.round(data.speed)}km/h</p>
                <p>Wind</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
