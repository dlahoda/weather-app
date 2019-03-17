const defaultState = {
  searchError: "",
  lastSearch: "",
  currentWeatherList: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_FORECAST":
      return {
        ...state,
        searchError: "",
        lastSearch: action.forecast.name,
        currentWeatherList: [
          ...state.currentWeatherList,
          action.forecast
        ]
      };
    case "SEARCH_ERROR":
      return {
        ...state,
        searchError: action.searchError
      }
    case "SET_CITY_FORECAST":
      return {
        ...state,
        lastSearch: action.cityName
      }
    default:
      return state;
  }
};