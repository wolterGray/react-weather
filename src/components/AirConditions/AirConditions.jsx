import React from "react";
import cl from "./airConditions.module.scss";
import { celsiusToFh } from "../../utils/weatherUtils";


function AirConditions({weatherData, degrees}) {
  const prop = {
    wind: weatherData.wind.speed,
    feels: celsiusToFh(weatherData.main["feels_like"], degrees),
    humidity: weatherData.main.humidity,
    pressure: weatherData.main.pressure,
    maxTemp: celsiusToFh(weatherData.main["temp_max"], degrees),
    minTemp: celsiusToFh(weatherData.main["temp_min"], degrees),
  };
  return (
    <div className={cl.airConditions}>
      <div className={`${cl.title} title`}>Air Conditions</div>
      <div className={cl.info}>
        <div className={cl.left_inner}>
          <div className={cl.item}>
            <img className={cl.icon} src="public/meteo-icons/thermometer.svg" />
            <div className={cl.text}>
              <div className={cl.info_title}>Real Feel</div>
              <div className={cl.value}>{prop.feels}</div>
            </div>
          </div>
          <div className={cl.item}>
            <img className={cl.icon} src="public/meteo-icons/wind.svg" />
            <div className={cl.text}>
              <div className={cl.info_title}>Wind</div>
              <div className={cl.value}>{prop.wind} m/s</div>
            </div>
          </div>
        </div>
        <div className={cl.center_inner}>
          <div className={cl.item}>
            <img className={cl.icon} src="public/meteo-icons/raindrops.svg" />
            <div className={cl.text}>
              <div className={cl.info_title}>Humidity</div>
              <div className={cl.value}>{prop.humidity} %</div>
            </div>
          </div>
          <div className={cl.item}>
            <img className={cl.icon} src="public/meteo-icons/barometer.svg" />
            <div className={cl.text}>
              <div className={cl.info_title}>Pressure</div>
              <div className={cl.value}>{prop.pressure} bar</div>
            </div>
          </div>
        </div>
        <div className={cl.right_inner}>
          <div className={cl.item}>
            <img
              className={cl.icon}
              src="public/meteo-icons/pressure-high.svg"
            />
            <div className={cl.text}>
              <div className={cl.info_title}>Max</div>
              <div className={cl.value}>{prop.maxTemp}</div>
            </div>
          </div>
          <div className={cl.item}>
            <img
              className={cl.icon}
              src="public/meteo-icons/pressure-low.svg"
            />
            <div className={cl.text}>
              <div className={cl.info_title}>Min</div>
              <div className={cl.value}>{prop.minTemp}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirConditions;
