import axios from "axios";
import {
  GEOCODING__URL,
  LIMIT,
  UNITS__CEL,
  WEATHER__HOUR__URL,
  WEATHER__URL,
} from "../constants/apiConstants";
import { API__KEY } from "../constants/apiKey";

const getWeatherForecast = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${WEATHER__URL}lat=${lat}&lon=${lon}&${UNITS__CEL}&${API__KEY}`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const getWeatherDays = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${WEATHER__HOUR__URL}lat=${lat}&lon=${lon}&${UNITS__CEL}&${API__KEY}`
    );
    const data = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const getGeoCoding = async (city) => {
  try {
    const response = await axios.get(
      `${GEOCODING__URL}q=${city}&${LIMIT}1&${API__KEY}`
    );
    const coordinate = await response.data[0];
    return coordinate;
  } catch (error) {
    console.error(`Error fetching user with  ID:`, error);
  }
};


export {getGeoCoding, getWeatherForecast, getWeatherDays};
