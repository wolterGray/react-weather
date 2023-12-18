export const getWeatherIcon = (icon, id) => {
  function dayOrNight(id) {
    if (id?.slice(-1) === "d") return true;
    return false;
  }
  // thunderstorms
  return (
    (icon === "thunderstorm with light rain" && "thunderstorms.svg") ||
    (icon === "thunderstorm with rain" && "thunderstorms.svg") ||
    (icon === "thunderstorm with heavy rain" && "thunderstorms.svg") ||
    (icon === "light thunderstorm" && "thunderstorms.svg") ||
    (icon === "thunderstorm" && "thunderstorms.svg") ||
    (icon === "heavy thunderstorm" && "thunderstorms.svg") ||
    (icon === "ragged thunderstorm" && "thunderstorms.svg") ||
    (icon === "thunderstorm with light drizzle" && "thunderstorms.svg") ||
    (icon === "thunderstorm with drizzle" && "thunderstorms.svg") ||
    (icon === "thunderstorm with heavy drizzle" && "thunderstorms.svg") ||
    // drizzle

    (icon === "light intensity drizzle" && "drizzle.svg") ||
    (icon === "drizzle" && "drizzle.svg") ||
    (icon === "heavy intensity drizzle" && "drizzle.svg") ||
    (icon === "Drizzle	light intensity drizzle rain" && "drizzle.svg") ||
    (icon === "drizzle rain" && "drizzle.svg") ||
    (icon === "heavy intensity drizzle rain" && "drizzle.svg") ||
    (icon === "shower rain and drizzle" && "drizzle.svg") ||
    (icon === "heavy shower rain and drizzle" && "drizzle.svg") ||
    (icon === "shower drizzle" && "drizzle.svg") ||
    //rain

    (icon === "light rain" &&
      `partly-cloudy-${dayOrNight(id) ? `day` : `night`}-rain.svg`) ||
    (icon === "moderate rain" &&
      `partly-cloudy-${dayOrNight(id) ? `day` : `night`}-rain.svg`) ||
    (icon === "heavy intensity rain" &&
      `partly-cloudy-${dayOrNight(id) ? `day` : `night`}-rain.svg`) ||
    (icon === "very heavy rain" &&
      `partly-cloudy-${dayOrNight(id) ? `day` : `night`}-rain.svg`) ||
    (icon === "extreme rain" &&
      `partly-cloudy-${dayOrNight(id) ? `day` : `night`}-rain.svg`) ||
    (icon === "freezing rain" && "hail.svg") ||
    (icon === "light intensity shower rain" && "rain.svg") ||
    (icon === "shower rain" && "rain.svg") ||
    (icon === "heavy intensity shower rain" && "rain.svg") ||
    (icon === "ragged shower rain" && "rain.svg") ||
    //snow

    (icon === "light snow" && "snow.svg") ||
    (icon === "snow" && "snow.svg") ||
    (icon === "heavy snow" && "snow.svg") ||
    (icon === "sleet" && "sleet.svg") ||
    (icon === "light shower sleet" && "sleet.svg") ||
    (icon === "shower sleet" && "sleet.svg") ||
    (icon === "light rain and snow" && "sleet.svg") ||
    (icon === "rain and snow" && "sleet.svg") ||
    (icon === "light shower snow" && "sleet.svg") ||
    (icon === "shower snow" && "sleet.svg") ||
    (icon === "heavy shower snow" && "sleet.svg") ||
    //atmosphere

    (icon === "mist" && "mist.svg") ||
    (icon === "smoke" && "smoke.svg") ||
    (icon === "haze" && "haze.svg") ||
    (icon === "sand/dust whirls" && "dust.svg") ||
    (icon === "fog" && "fog.svg") ||
    (icon === "sand" && "dust.svg") ||
    (icon === "dust" && "dust.svg") ||
    (icon === "volcanic ash" && "dust.svg") ||
    (icon === "squalls" && "dust.svg") ||
    (icon === "tornado" && "tornado.svg") ||
    //clear

    (icon === "clear sky" && `clear-${dayOrNight(id) ? "day" : "night"}.svg`) ||
    //clouds

    (icon === "few clouds" && `overcast-${dayOrNight(id)?'day':'night'}.svg`) ||
    (icon === "scattered clouds" && "cloudy.svg") ||
    (icon === "broken clouds" && "overcast.svg") ||
    (icon === "overcast clouds" && "overcast.svg") ||
    //else

    "not-available.svg"
  );
};

