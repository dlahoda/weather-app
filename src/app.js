import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import weatherReducer from "./reducers/forecast";
import App from "./components/app";

import * as data from "./temp/london.json";


const store = createStore(
  weatherReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

// store.dispatch({
//   type: "ADD_FORECAST",
//   forecast: data.default
// });
// store.dispatch({
//   type: "ADD_FORECAST",
//   forecast: data.default
// });