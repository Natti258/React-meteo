import React from "react";

function Weather({ data }) {
  const { name, main, weather, wind } = data;
  const currentDate = new Date();
  const options = { weekday: "long", hour: "2-digit", minute: "2-digit" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(currentDate);

  return (
    <div className="current-weather">
      <div>
        <h1 id="cityName">{name}</h1>
        <div id="currentDateTime">{formattedDate}</div>
        <p className="info-weather">
          {weather[0].description} <br />
          Humidity: <strong>{main.humidity}%</strong>, Wind: <strong>{wind.speed} km/h</strong>
        </p>
      </div>
      <div className="current-temperature">
        <div className="gif-container">
          <img src={getWeatherIcon(weather[0].icon)} alt="Weather Icon" />
        </div>
        <span className="current-temperature-water">{Math.round(main.temp)}</span>
        <span className="current-temperature-unit">°C</span>
      </div>
    </div>
  );
}

function getWeatherIcon(weatherCode) {
  switch (weatherCode) {
    case "01d":
      return "https://s9.gifyu.com/images/SUvPm.gif"; // Солнечно
    case "01n":
      return "https://s9.gifyu.com/images/SUve6.gif"; // Яркая луна
    case "02d":
    case "03d":
    case "04d":
      return "https://s9.gifyu.com/images/SUvP7.gif"; // Облачно
    case "02n":
    case "03n":
    case "04n":
      return "https://s9.gifyu.com/images/SUve0.gif"; // Облачно ночью
    case "09d":
        case "09d":
    case "09n":
      return "https://s9.gifyu.com/images/SUvPd.gif"; // Дождь
    case "10d":
    case "10n":
      return "https://s9.gifyu.com/images/SUvPQ.gif"; // Ливень
    case "11d":
    case "11n":
      return "https://s9.gifyu.com/images/SUvPg.gif"; // Гроза
    case "13d":
    case "13n":
      return "https://s9.gifyu.com/images/SUvP5.gif"; // Снег
    case "50d":
    case "50n":
      return "https://s9.gifyu.com/images/SUvX2.gif"; // Туман
    default:
      return "https://s9.gifyu.com/images/SUvPm.gif"; // Неизвестно
  }
}

export default Weather;