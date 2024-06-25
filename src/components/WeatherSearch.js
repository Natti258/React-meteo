import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import Forecast from "./Forecast";

function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`
      );
      setWeatherData(weatherResponse.data);
      setError(null);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=YOUR_API_KEY`
      );
      setForecastData(forecastResponse.data);
    } catch (error) {
      setError("City not found");
      setWeatherData(null);
      setForecastData(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {weatherData && <Weather data={weatherData} />}
      {forecastData && <Forecast data={forecastData} />}
    </div>
  );
}

export default WeatherSearch;