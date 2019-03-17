import axios from "axios";
import { getForecastUrl } from "../api/openweathermap";

export const getExtendedForecast = forecast => ({
  type: "GET_EXTENDED_FORECAST",
  forecast
});

export const startGetExtendedForecast = (cityName = "Kiev") => {
  return (dispatch, getState) => {
    const cityNamesList = getState().forecastList.map(forecast => forecast.city.name);

    if (cityNamesList.indexOf(cityName) === -1) {
      const url = getForecastUrl(cityName);
      
      return axios
      .get(url)
      .then(response => {
        const data = response.data;
        if (data) {
          dispatch(getExtendedForecast(data));
        }
      })
      .catch(error => console.log(error));
    }
  };
};
