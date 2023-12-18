import React from "react";
import cl from "./main.module.scss";
import WeatherDashboard from "../WeatherDashboard/WeatherDashboard";
import Message from "../message/Message";

const Main = ({getWeatherData}) => {
  return (
    <div className={cl.main}>
      <WeatherDashboard getWeatherData={getWeatherData} />
    </div>
  );
};

export default Main;
