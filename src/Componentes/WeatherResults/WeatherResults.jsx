import { useState } from 'react';
import React from 'react';
import WeatherIcon from '../WheatherIcon';

function WeatherApp({ weatherData }) {
  const [showFahrenheit, setShowFahrenheit] = useState(false);

  const handleToggleTemp = () => {
    setShowFahrenheit(!showFahrenheit);
  };
  const getTempInFahrenheit = () => {
    return Math.round(((weatherData.main.temp - 273.15) * 9) / 5 + 32);
  };
  return (
    <>
      <div className="card">
        <h2>The weather in {weatherData.name}:</h2>
        <WeatherIcon description={weatherData.weather[0].description} />
        <p className="degree">
          {showFahrenheit
            ? getTempInFahrenheit() + '°F'
            : Math.round(weatherData.main.temp - 273.15) + '°C'}
        </p>
        <div className="description">
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Latitude: {weatherData.coord.lat}</p>
          <p>Longitude: {weatherData.coord.lon}</p>
        </div>
      </div>
      <div className="button">
        <button onClick={handleToggleTemp} className="btn">
          {showFahrenheit ? 'Show in Celcius' : 'Show in farenheit'}
        </button>
      </div>
    </>
  );
}

export default WeatherApp;
