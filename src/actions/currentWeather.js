import axios from "axios";
import { getCurrentWeatherUrl, processError } from "../api/apixu";

const errorInterceptorInstance = axios.create();
errorInterceptorInstance.interceptors.response.use(null, error => {
  console.log(error);
});

export const addForecast = forecast => ({
  type: "ADD_FORECAST",
  forecast
});

export const startAddForecast = (cityName) => {
  return (dispatch, getState) => {
    const cityNamesList = getState().currentWeather.currentWeatherList.map(forecast => forecast.location.name.toLowerCase());
    
    if (cityNamesList.indexOf(cityName.toLowerCase()) !== -1) {
      return dispatch(setCityForecast(cityName));
    }

    const url = getCurrentWeatherUrl(cityName);

    return axios
      .get(url)
      .then(response => {
        const data = response.data;
        if (data) {
          dispatch(addForecast(data));
        } else {
          throw new Error("Received data is empty");
        }
      })
      .catch(error => {
        const errorData = error.response.data.error;
        const apiError = processError(errorData.code);
        const errorMessage = apiError ? apiError.message : error.message;
        dispatch(searchError(errorMessage));
      });
  };
};

export const searchError = searchError => ({
  type: "SEARCH_ERROR",
  searchError
});

export const setCityForecast = cityName => ({
  type: "SET_CITY_FORECAST",
  cityName
});
