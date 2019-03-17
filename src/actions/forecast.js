import axios from "axios";
import { getForecastUrl } from "../api/openweathermap";

export const getExtendedForecast = forecast => ({
  type: "GET_EXTENDED_FORECAST",
  forecast
});

export const startGetExtendedForecast = (cityName = "Kiev") => {
  return (dispatch, getState) => {
    const url = getForecastUrl(cityName);
    
    return axios.get(url)
      .ther(response => {
        const data = response.data;
        if (data) {
          dispatch(addForecast(data));
        }
      })
      .catch(error => console.log(error));
  };
};