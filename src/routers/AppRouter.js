import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CurrentWeatherPage from "../components/CurrentWeatherPage";
import ForecastPage from "../components/ForecastPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={CurrentWeatherPage} exact />
        <Route path="/forecast/:city" component={ForecastPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
