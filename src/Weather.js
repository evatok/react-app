import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Paris",
    date: "23.10.22",
    temperature: "32",
    description: "Sunny",
    humidity: "55",
    wind: "5"
  };
  return (
    <div className="Weather">
      <div className="container">
        <div className="row mt-2">
          <div className="col-4">
            <h1 id="city">{weatherData.city}</h1>
            <div>last updated: </div>
            <div id="date">{weatherData.date}</div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-4">
            <strong id="temperature">{weatherData.temperature}</strong>
            <span className="units">°C</span>
          </div>
          <div className="col-8">
            {" "}
            <ul>
              <li id="description">{weatherData.description}</li>
              <li>
                Humidity: <span id="humidity"></span>
                {weatherData.humidity}%
              </li>
              <li>
                Wind: <span id="wind"></span> {weatherData.wind} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
