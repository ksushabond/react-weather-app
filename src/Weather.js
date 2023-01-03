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
              autoFocus="on"
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

      <h2>
        Tuesday 15:00
        <br />
        Sunny
      </h2>

      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          <span className="temperature">10</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: 40%</li>
            <li>Wind: 4 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
