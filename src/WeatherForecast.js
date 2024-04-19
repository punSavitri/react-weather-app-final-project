import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  //console.log(props);

  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "4c3a38t82d64bfo4330f17ff02bfbd97";
  let longitutde = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitutde}&lat=${latitude}&key=${apiKey}`;
  //console.log(apiUrl);
  axios.get(apiUrl).then(handleResponse);



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