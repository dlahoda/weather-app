const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case "GET_EXTENDED_FORECAST":
      return [
        ...state,
        action.forecast
      ]
    default:
      return state; 
  }
}