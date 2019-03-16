const defaultState = {
  searchError: "",
  forecast: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_FORECAST":
      return {
        ...state,
        searchError: "",
        forecast: [
          ...state.forecast,
          action.forecast
        ]
      };
    case "SEARCH_ERROR":
      return {
        ...state,
        searchError: action.searchError
      }
    default:
      return state;
  }
};