import React from "react";
import "./Weather.css";


export default function Weather() {
  return (
    <div className="Weather">
      <h1 className='text-warning' >Hello React Weather App</h1>
      <footer>
        <p>This project was coded by <a href="https://github.com/punSavitri" title="GitHub Repo link"> Savitri Pun </a> and <a href="https://github.com/punSavitri/react-weather-app-final-project.git" title="Link to GitHub project repo"> is a open-sourced </a> and <a href="https://react-forecast-weather-app2024.netlify.app/" title="Netlify link to the project"> hosted on Netlify</a>
        </p>
      </footer>
    </div>
  )
}