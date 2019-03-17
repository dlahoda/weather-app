import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CurrentWeatherPage from "../components/CurrentWeatherPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={CurrentWeatherPage}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;