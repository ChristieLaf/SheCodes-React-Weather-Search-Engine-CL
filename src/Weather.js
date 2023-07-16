import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Saturday 8:00 pm</li>
        <li>Light Rain Showers</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt="Light rain showers"
            />
            <span className="tempertaure">6 </span>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation: 16% </li>
            <li> Humidity: 92% </li>
            <li> Wind: 3 mph </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
