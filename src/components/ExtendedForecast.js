import React from "react";
import moment from "moment";
import CityForecast from "./CityForecast";

export default class ExtendedForecast extends React.Component {
  createForecastItem = (forecast, key) => {
    const dayText = moment.unix(forecast.date_epoch).format("ddd");
    return (
      <div className="forecast__item" key={key}>
        <h3 className="forecast__text">{dayText}</h3>
        <img src={forecast.day.condition.icon} />
        <h3 className="forecast__text">{Math.trunc(forecast.day.avgtemp_c)}&deg;C</h3>
        
      </div>
    );
  };

  createForecastBlock = forecastList => {
    return (
      <div className="forecast">
        {forecastList.map((dayForecast, index) =>
          this.createForecastItem(dayForecast, index)
        )}
      </div>
    );
  };

  createView = forecast => {
    return (
      <div>
        <CityForecast
          {...{ location: forecast.location, current: forecast.current }}
        />
        {this.createForecastBlock(forecast.forecast.forecastday)}
      </div>
    );
  };

  render() {
    return <div>{this.createView(this.props.forecast)}</div>;
  }
}
