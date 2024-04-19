import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheitTemperature(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function showCelsiusTemperature(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    let fahrenheit = (props.celsius * 9) / 5
      + 32;
    return fahrenheit;
  }

  if (unit === "celsius") {
    return (
      <div>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">°C | {" "}<a href="/" onClick={showFahrenheitTemperature}>°F</a></span>
      </div>
    )
  } else
    return (
      <div>
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit"><a href="/" onClick={showCelsiusTemperature}>°C</a> | {" "} °F</span>
      </div>
    )
}