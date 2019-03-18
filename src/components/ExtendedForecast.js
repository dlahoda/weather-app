import React from "react";
import moment from "moment";
import CityForecast from "./CityForecast";

export default class ExtendedForecast extends React.Component {
  createForecastItem = forecast => {
    const dayText = moment.unix(forecast.date_epoch).format("ddd")
    return (
      <div>
        <h3>{dayText}</h3>
        <img src={forecast.day.condition.icon} />
        <h3>{forecast.day.avgtemp_c} &#8451;</h3>
        <h4>{forecast.day.mintemp_c}/{forecast.day.maxtemp_c} &#8451;</h4>
        <h3>{forecast.day.totalprecip_mm} mm</h3>
      </div>
    );
  };

  createForecastBlock = forecastList => {
    return (
      <div>
        {forecastList.map(dayForecast => this.createForecastItem(dayForecast))}
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
