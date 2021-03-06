import axios from "axios";
import { getForecastUrl } from "../api/apixu";

export const getExtendedForecast = forecast => ({
  type: "GET_EXTENDED_FORECAST",
  forecast
});

export const startGetExtendedForecast = (cityName) => {
  return (dispatch, getState) => {
    const cityNamesList = getState().forecastList.map(forecast => forecast.location.name.toLowerCase());

    if (cityNamesList.indexOf(cityName.toLowerCase()) === -1) {
      const url = getForecastUrl(cityName);
      
      return axios
      .get(url)
      .then(response => {
        const data = response.data;
        if (data) {
          dispatch(getExtendedForecast(data));
        } else {
          throw new Error("Received data is empty");
        }
      })
      .catch(error => console.log(error));
    }
  };
};
