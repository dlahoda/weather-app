import React from "react";
import SearchFrom from "./SearchForm";
import CurrentWeather from "./CurrentWeather";

const App = () => (
  <div>
    <h1>Weather App</h1>
    <SearchFrom />
    <CurrentWeather />
  </div>
);

export default App;