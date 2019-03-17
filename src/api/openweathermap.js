export const getCurrentWeatherUrl = cityName =>
  `${process.env.API_URL}weather?q=${cityName}&APPID=${process.env.API_KEY}&units=metric`;

export const getForecastUrl = cityName =>
  `${process.env.API_URL}forecast?q=${cityName}&APPID=${process.env.API_KEY}&units=metric`;
