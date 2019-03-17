import axios from "axios";
import { getCurrentWeatherUrl } from "../api/openweathermap";

const errorInterceptorInstance = axios.create();
errorInterceptorInstance.interceptors.response.use(null, error => {
  console.log(error);
});

export const addForecast = forecast => ({
  type: "ADD_FORECAST",
  forecast
});

export const startAddForecast = (cityName = "Kiev") => {
  return (dispatch, getState) => {
    const url = getCurrentWeatherUrl(cityName);

    return axios.get(url)
      .then(response => {
        const data = response.data;
        if (data) {
          dispatch(addForecast(data));
        } else {
          console.log("data is wrong");
        }
      })
      .catch(error => {
        dispatch(searchError(error.message));
      });
  };
};

export const searchError = searchError => ({
  type: "SEARCH_ERROR",
  searchError
});