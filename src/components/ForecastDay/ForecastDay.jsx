import React from "react";
import cl from "./forecastDay.module.scss";
import {getWeatherIcon} from "../../utils/iconUtils";
import {celsiusToFh} from "../../utils/weatherUtils";

function ForecastDay({list, degrees}) {
  return (
    <div className={cl.forecastDay}>
      <h3 className={`${cl.title} title`}>Today forecast</h3>
      <div className={cl.cards}>
        {list.slice(0, 6).map((item) => {
          return (
            <div key={item.dt} className={cl.item}>
              <div className={cl.time}>
                {item.dt_txt.split(" ")[1].slice(0, -3)}
              </div>
              <div className={cl.icon}>
                <img
                  className={cl.icon}
                  alt={item.weather[0]["description"]}
                  src={`public/meteo-icons/${getWeatherIcon(
                    item.weather[0]["description"],
                    item.weather[0]["icon"]
                  )}`}
                />
              </div>
              <div className={cl.degrees}>
                {celsiusToFh(item.main.temp, degrees)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ForecastDay;
