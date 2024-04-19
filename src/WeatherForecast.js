import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row mt-4">
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>
          <WeatherIcon code="01d" size={36} />
          <div>
            <span className="WeatherForecast-temperautre-max">15°</span>
            <span className="WeatherForecast-temperature-min">11°</span>
          </div>
        </div>
      </div>
    </div>
  );
}