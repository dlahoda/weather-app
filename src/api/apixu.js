const currentWeatherAPIMethod = "/current.json";
const forecastAPIMethod = "/forecast.json";
const numOfDays = 5;
export const errorCodes = [
  { code: 1002, message: "API key not provided" },
  { code: 1003, message: "Provide city name" },
  { code: 1005, message: "API request url is invalid" },
  { code: 1006, message: "No location found" },
  { code: 2006, message: "API key provided is invalid" },
  { code: 2007, message: "API key has exceeded calls per month quota" },
  { code: 2008, message: "API key has been disabled" },
  { code: 9999, message: "Internal API error" }
];

export const processError = code =>
  errorCodes.find(error => error.code === code);

export const getCurrentWeatherUrl = cityName =>
  `${process.env.API_URL}${currentWeatherAPIMethod}?key=${
    process.env.API_KEY
  }&q=${cityName}`;

export const getForecastUrl = cityName =>
  `${process.env.API_URL}${forecastAPIMethod}?key=${
    process.env.API_KEY
  }&q=${cityName}&days=${numOfDays}`;
