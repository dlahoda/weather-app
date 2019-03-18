
const currentWeatherAPIMethod = "/current.json";
const forecastAPIMethod = "/forecast.json";
const numOfDays = 5;

export const getCurrentWeatherUrl = cityName =>
  `${process.env.API_URL}${currentWeatherAPIMethod}?key=${process.env.API_KEY}&q=${cityName}`;

export const getForecastUrl = cityName =>
  `${process.env.API_URL}${forecastAPIMethod}?key=${process.env.API_KEY}&q=${cityName}&days=${numOfDays}`;