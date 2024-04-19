import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maximumTemperature() {

    let maxtemperature = Math.round(props.data.temp.max);
    return `${maxtemperature}°`;
  }
  function minimumTemperature() {
    let mintemperature = Math.round(props.data.temp.min);
    return `${mintemperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
    }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div>
        <span className="WeatherForecast-temperautre-max">{maximumTemperature()}</span>
        <span className="WeatherForecast-temperature-min">{minimumTemperature()}</span>
      </div>
    </div>
  );
}
