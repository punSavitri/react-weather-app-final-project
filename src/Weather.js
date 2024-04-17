import React from "react";
import "./Weather.css";


export default function Weather() {
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
      <h1>London</h1>
      <ul>
        <li>Thursday 12:00</li>
        <li>Sunny day</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Sunny day" />
          20°C
        </div>
        <div className="col-6">
          <ul>
            <li>Participation:15%</li>
            <li>Humidity:72%</li>
            <li>Wind:15Kmh</li>
          </ul>
        </div>
      </div>
      
    </div>

  )
}