export const getCurrentWeatherUrl = cityName =>
  `${process.env.API_URL}${cityName}&APPID=${process.env.API_KEY}&units=metric`;
