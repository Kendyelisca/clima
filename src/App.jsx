import React, { useState } from 'react';
import axios from 'axios';
import WeatherApp from './Componentes/WeatherResults/WeatherResults';
import './App.css';

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
        <div class="flex -mx-3 mb-6">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="location-input"
            >
              Country
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="location-input"
              type="text"
              placeholder="Enter the country..."
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            ></input>
          </div>
          <div class="w-full px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="location-input"
            >
              City
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="location-input"
              type="text"
              placeholder="Enter the city..."
              value={city}
              onChange={(event) => setCity(event.target.value)}
            ></input>
          </div>
          <div className="flex justify-center items-center">
            <button
              class="shadow btn bg-red-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-5 border-r-8 rounded w-1/1"
              type="submit"
            >
              Get weather
            </button>
          </div>
        </div>
      </form>
      {error && <div>{error}</div>} {/* muestra el mensaje de error si hay un error */}
      {weatherData && <WeatherApp weatherData={weatherData} />}
    </div>
  );
}

export default App;
