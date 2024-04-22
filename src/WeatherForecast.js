import React, { useState, useEffect } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  //console.log(props);
  const [forecastData, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  //useEffect function 
  useEffect(function () {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    //console.log(response.data);
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  

  if (loaded) {
    //console.log(forecastData);
    return (
      <div className="WeatherForecast">
        <div className="row mt-4">
          {/* loop to display the 5 days weather forecast */}
          {forecastData.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              )
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "69ce73a5a984ee8acd2f5cb48766d6fe";
    let latitude = props.coordinates.lat;
    let longitutde = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitutde}&appid=${apiKey}&units=metric`;
    //console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    return null;

  }
}