import React from "react";
import {createContext} from "react";

export const MyContext = createContext();

export const MyContextProvider = ({children}) => {
  const [weatherForecast, setWeatherForecast] = React.useState([]);
  const [weatherDays, setWeatherDays] = React.useState([]);
  const [isRequest, setIsRequest] = React.useState(null);
  const [degrees, setDegrees] = React.useState(
    localStorage.getItem("degrees") || "cel"
  );

 

  const value = {
    weatherForecast,
    setWeatherForecast,
    weatherDays,
    setWeatherDays,
    isRequest,
    setIsRequest,
    degrees,
    setDegrees,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
