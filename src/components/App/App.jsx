import React from "react";
import "./app.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import {MyContext} from "../../myContext";
import Loader from "../Loader/Loader";
import {
  getGeoCoding,
  getWeatherDays,
  getWeatherForecast,
} from "../../api/weatherApi";
import {getInfoApi} from "../../api/infoApi";
import OfflinePage from "../OfflinePage/OfflinePage";

function App() {
  const {
    setWeatherForecast,
    setWeatherDays,
    setIsRequest,
    weatherForecast,
    weatherDays,
  } = React.useContext(MyContext);
  const [isLoading, setIsLoading] = React.useState(true);
  const [offline, setOffline] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const fetchData = async (latitude, longitude) => {
    try {
      const [weatherData, weatherDaysData] = await Promise.all([
        getWeatherForecast(latitude, longitude),
        getWeatherDays(latitude, longitude),
      ]);
      setWeatherForecast(weatherData);
      setWeatherDays(weatherDaysData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getWeatherData = async (input) => {
    setIsLoading(true);
    try {
      const {lat, lon} = await getGeoCoding(input);
      await fetchData(lat, lon);
      setIsRequest(false);
    } catch (error) {
      console.error("City not Found!");
      setIsRequest(true);
      // Дополнительная обработка ошибок
    } finally {
      setIsLoading(false);
    }
  };

  const getGeoLocation = async () => {
    try {
      if ("geolocation" in navigator) {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const {latitude, longitude} = position.coords;
        await fetchData(latitude, longitude);
      } else {
        console.error("Geolocation is not supported in your browser");
      }
    } catch (error) {
      try {
        console.error("Error fetching geolocation:", error.message);
        const apiCoords = await getInfoApi();
        await fetchData(...apiCoords.split(","));
        setErrorMessage(error.message);
      } catch {
         await getWeatherData("London")
      }
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    const handleOnline = () => {
      setOffline(false);
    };

    const handleOffline = () => {
      setOffline(true);
      setIsLoading(false);
    };

    // Добавляем слушателей событий онлайн/офлайн для обновления состояния сети
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // При первом рендере запускаем запрос на геолокацию
    getGeoLocation();

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  if (offline || !weatherDays || !weatherForecast) {
    if (offline) {
      return (
        <OfflinePage>
          Check your internet connection, and reload page.
        </OfflinePage>
      );
    }
    return (
      <OfflinePage>
        Unfortunately, React Weather is not working due to an error, that we are
        already trying to fix. Please use the service later.
      </OfflinePage>
    );
  }

  return (
    <div className="app">
      <Header />
      <Main getWeatherData={getWeatherData} />
    </div>
  );
}

export default App;
