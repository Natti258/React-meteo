import React from "react";

function Forecast({ data }) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const currentDayOfWeekIndex = today.getDay();

  const getNextDayOfWeek = (currentDayOfWeekIndex, offset) => {
    return (currentDayOfWeekIndex + offset) % 7;
  };

  const forecastList = data.list.filter((item, index) => index % 8 === 0).slice(1, 6);

  return (
    <div className="weather-forecast">
      {forecastList.map((forecast, index) => {
        const forecastDate = new Date(forecast.dt * 1000);
        const dayOfWeekIndex = getNextDayOfWeek(currentDayOfWeekIndex, index + 1);
        const maxTemp = Math.round(forecast.main.temp_max);
        const minTemp = Math.round(forecast.main.temp_min);
        const weatherCode = forecast.weather[0].icon;
        const weatherIcon = getWeatherIcon(weatherCode);

        return (
          <div className="weather-day" key={index}>
            <div className="weather-forecast-date">{daysOfWeek[dayOfWeekIndex]}</div>
            <img src={weatherIcon} id="weather-day-icon" alt="icons" />
            <div className="weather-forecast-temperature">
              <div className="weather-forecast-temperature-max">
                <strong>{maxTemp}°C</strong>
              </div>
              <div className="weather-forecast-temperature-min">{minTemp}°C</div>
            </div>
          </div>
        );
      })}
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
    case "02n":
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      return "https://s9.gifyu.com/images/SUvP7.gif"; // Облачно
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

export default Forecast;