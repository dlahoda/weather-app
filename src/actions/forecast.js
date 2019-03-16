import axios from "axios";

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
    const apikey = "d67da26893b3dadf7e7984351171bdec";
    const url = `//api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apikey}&units=metric`;

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
        console.log(error);
        dispatch(searchError(error.message));
      });
  };
};

export const searchError = searchError => ({
  type: "SEARCH_ERROR",
  searchError
});