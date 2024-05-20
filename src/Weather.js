import React, { useState } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";


export default function Weather(props) {
  //assign state variables
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeatherData(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000)
    });
  }
  //this function search the city
  function search() {
    //make an api call
    let apiKey = "5b565b9df0c73c61b9800cce1a0e8af7";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    console.log(apiUrl);
    //request axios to get data from api 
    axios.get(apiUrl).then(showWeatherData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChangeCity(event) {
    //consle.log(event.target.value);
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Enter a city name...." autoFocus="on" className="form-control search-input" onChange={handleChangeCity} required />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-primary w-100" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div >
    )
  } else {
    //search the city function
    search();
    //if it is not ready then 
    //show the react loader 
    return (
      <div className="text-center mt-3 pt-5">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperClass=""
        />
      </div>
    )
  }
}