import React from "react";

import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>

      <h2>
        <FormattedDate date={props.data.date} />
      </h2>

      <div className="row mt-3">
        <div className="col-md-6">
          <WeatherIcon code={props.data.icon} size={70} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-md-6">
          <div className="Wreapper">
            <ul>
              <li>{props.data.description}</li>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
