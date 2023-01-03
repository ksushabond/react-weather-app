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
              placeHolder="Search for a city"
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-outline-secondary"
            />
          </div>
        </div>
      </form>
      <h1>Odessa</h1>
      <ul>
        <li>Tuesday 15:00</li>
        <li>Sunny</li>
      </ul>
      <div clasName="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          10°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: 40%</li>
            <li>Wind: 4 km/h</li>
          </ul>
        </div>
      </div>
      Hello from Weather
    </div>
  );
}
