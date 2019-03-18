import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "normalize.css";
import "./scss/styles.scss";
import currentWeatherReducer from "./reducers/currentWeather";
import extendedForecastReducer from "./reducers/forecast";
import AppRouter from "./routers/AppRouter";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    currentWeather: currentWeatherReducer,
    forecastList: extendedForecastReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));