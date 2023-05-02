import React, { useState } from 'react';
import axios from 'axios';
import WeatherApp from './Componentes/WeatherResults/WeatherResults';
import './App.css';
import WeatherIcon from './Componentes/WheatherIcon';

function App() {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = '1c9f4be264c59588a211530c1e4a2be6'; // accede a la clave de API desde una variable de entorno

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`,
      )
      .then((response) => {
        setWeatherData(response.data);
        setError(null); // borra cualquier error anterior
      })
      .catch((error) => {
        console.log(error);
        setError(
          'We were unable to provide the climate for this specific location, please try again.',
        ); // establece el estado de error
      });
  };

  return (
    <div className="main">
      <form class="formulario" onSubmit={handleFormSubmit}>
        <div class="container">
          <div class="country">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="location-input"
            >
              Country
            </label>
            <input
              id="location-input"
              type="text"
              placeholder="Enter the country..."
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            ></input>
          </div>
          <div class="city">
            <label for="location-input">City</label>
            <input
              id="location-input"
              type="text"
              placeholder="Enter the city..."
              value={city}
              onChange={(event) => setCity(event.target.value)}
            ></input>
          </div>
          <div className="btn-container">
            <button class="btn-1" type="submit">
              Get weather
            </button>
          </div>
        </div>
      </form>
      {error && <p>{error}</p>} {/* muestra el mensaje de error si hay un error */}
      {weatherData && <WeatherApp weatherData={weatherData} />}
    </div>
  );
}

export default App;
