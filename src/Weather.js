import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() {
  //assign state variables

  const [weatherData, setWeatherData] = useState({ ready: false });

  function showWeatherData(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: "Thursday 12:00"

    });

  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Enter a city name...." autoFocus="on" className="form-control" required />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <div>
                <img src={weatherData.iconUrl} alt={weatherData.description} />
              </div>
              <div>
                <span className="temperature">{weatherData.temperature}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div >
    )
  } else {
    //make an api call
    let apiKey = "5b565b9df0c73c61b9800cce1a0e8af7";
    let units = "metric";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    console.log(apiUrl);
    //request axios to get data from api 
    axios.get(apiUrl).then(showWeatherData);
    return "Loading....";
  }
}