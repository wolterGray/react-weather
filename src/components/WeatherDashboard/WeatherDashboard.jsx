import React from "react";

import cl from "./weatherDashboard.module.scss";

import ForecastWeatherBlocks from "../ForecastWeatherBlocks/ForecastWeatherBlocks";
import ForecastWeek from "../ForecastWeek/ForecastWeek";
import Message from "../message/Message";

function WeatherDashboard({getWeatherData}) {
  return (
    <div className={cl.weather}>
      <div className={cl.weather_row}>
        <ForecastWeatherBlocks getWeatherData={getWeatherData}/>
        <ForecastWeek />
      </div>
    </div>
  );
}

export default WeatherDashboard;
