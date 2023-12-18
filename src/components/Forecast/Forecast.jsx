import React from "react";
import cl from "./forecast.module.scss";
import {getWeatherIcon} from "../../utils/iconUtils";
import { celsiusToFh } from "../../utils/weatherUtils";

function Forecast({weather, degrees}) {
  const prop = {
    city: weather.name,
    temp: celsiusToFh(weather.main.temp, degrees),
    weather: weather.weather[0].main,
    icon: weather.weather[0]["description"],
    iconName: weather.weather[0]["icon"],
  };

  return (
    <div className={cl.forecast}>
      <div className={cl.city_info}>
        <div className={cl.name}>{prop.city}</div>
        <div className={cl.description}>{prop.weather}</div>
        <div className={cl.degrees}>{prop.temp}</div>
      </div>
      <div className={cl.icon}>
        <img
          className={cl.icon}
          src={`public/meteo-icons/${getWeatherIcon(prop.icon, prop.iconName)}`}
          alt={prop.icon}
        />
      </div>
    </div>
  );
}

export default Forecast;
