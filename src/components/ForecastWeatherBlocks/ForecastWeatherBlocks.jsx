import React from "react";
import cl from "./forecastWeatherBlocks.module.scss";
import Forecast from "../Forecast/Forecast";
import ForecastDay from "../ForecastDay/ForecastDay";
import AirConditions from "../AirConditions/AirConditions";
import SearchInput from "../searchInput/SearchInput";
import {MyContext} from "../../myContext";


function ForecastWeatherBlocks({getWeatherData}) {
  const {weatherForecast, weatherDays, degrees} =
    React.useContext(MyContext);
  return (
    <div className={cl.weather_blocks}>
      <SearchInput getWeatherData={getWeatherData} />
      <Forecast degrees={degrees} weather={weatherForecast} />
      <ForecastDay degrees={degrees} list={weatherDays.list} />
      <AirConditions degrees={degrees} weatherData={weatherForecast} />
    </div>
  );
}
export default ForecastWeatherBlocks;
