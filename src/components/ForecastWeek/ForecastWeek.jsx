import React from "react";
import cl from "./forecastWeek.module.scss";
import {getWeatherIcon} from "../../utils/iconUtils";
import {MyContext} from "../../myContext";
import { celsiusToFh } from "../../utils/weatherUtils";


function ForecastWeek() {
  const {weatherDays, degrees} = React.useContext(MyContext);

  const getWeekDay = (value) => {
    const date = new Date(value);
    const options = {weekday: "long"};
    return date.toLocaleString("en-US", options);
  };
  return (
    <div className={cl.forecastWeek}>
      <h3 className={`${cl.title} title`}>5 days forecast</h3>
      <div className={cl.cards}>
        {weatherDays.list.map((e, index) => {
          const weather = {
            day: e.dt_txt.split(" ")[0],
            icon: e.weather[0]["description"],
            iconName: e.weather[0]["icon"],
            value: e.weather[0]["main"],
            temp: celsiusToFh(e.main.temp, degrees),
          };
          return (
            index % 8 === 0 && (
              <div className={cl.item} key={e.dt}>
                <div className={cl.day}>{getWeekDay(weather.day)}</div>
                <div className={cl.desc_value}>
                  <div>
                    <img
                      className={cl.icon}
                      src={`public/meteo-icons/${getWeatherIcon(weather.icon, weather.iconName)}`}
                    />
                  </div>
                  <p>{weather.value}</p>
                </div>
                <div className={cl.degrees}>{weather.temp}</div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default ForecastWeek;
