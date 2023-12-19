# React Weather App

[react-weather](https://wolterGray.github.io/react-weather)

This is a simple weather application that provides hourly and multi-day weather forecasts. You can search for weather information by city name, location, or IP address.

## Features

- Search weather by city name.
- Hourly Weather Forecast
- Multi-Day Weather Forecast
- Information about pressure, real sensations, maximum and minimum temperature, humidity and wind speed.
- Tracking geoposition or location via IP.
- The application provides an error page with an informative message about the encountered error, along with an option for the user to return to the main page.
- Switch between Celsius and Fahrenheit.
- Changing the interface theme.
  

## Technologies Used

- React
- Vite
- Axios
- React Icons
- React Loader Spinner

## Error Handling

The application includes handling for various error scenarios to ensure a better user experience.

##### 1. City Not Found or Incorrect Input:

If the entered city is not found or contains incorrect characters, the application will display an error message, alerting the user to the issue.

##### 2. No Internet Connection or Unknown Error:

If there is no internet connection or an unknown error occurs while fetching weather data, the application automatically redirects the user to an error page with information about the encountered problem.



### Used Icons

The project uses icons provided by the [basmilius](https://github.com/basmilius/weather-icons.git).


## How to Run

1. Clone the repository:
2. 
3.     `git clone https://github.com/wolterGray/react-weather.git`
4. 
5. Install dependencies:
6. 
7.     `npm install`
8. 
9. Run the development server:
10. 
11.     `npm run dev`

Feel free to contribute or report issues!
