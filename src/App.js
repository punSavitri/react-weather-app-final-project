import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Tokyo" />
      <footer>
        <p>This project was coded by <a href="https://github.com/punSavitri" title="GitHub Repo link" rel="noopener noreferrer"> Savitri Pun </a> and <a href="https://github.com/punSavitri/react-weather-app-final-project.git" title="Link to GitHub project repo" rel="noopener noreferrer"> is a open-sourced on GitHub </a> and <a href="https://react-forecast-weather-app2024.netlify.app/" title="Netlify link to the project" rel="noopener noreferrer"> hosted on Netlify</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
