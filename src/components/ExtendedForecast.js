import React from "react";
import moment from "moment";

export default class ExtendedForecast extends React.Component {
  createConditionsBlock = weatherArray => {
    return weatherArray.map((weather, index) => (
      <div key={index}>
        <img src={`//openweathermap.org/img/w/${weather.icon}.png`} />
        <span>{weather.main}</span>
      </div>
    ));
  };
  

  createForecastRow = ({
    dt: date,
    weather,
    main,
    wind
  }, index) => {
    date = moment.unix(date).format("HH:mm, D.MM");
    
    return (
      <tr key={index}>
        <td>
          <span>
            <span>{date}</span>
            <span>{this.createConditionsBlock(weather)}</span>
          </span>
        </td>
        <td>
          <span>{main.temp} &#8451;</span>
        </td>
        <td>
          <span>{main.pressure} hPa</span>
        </td>
        <td>
          <span>{wind.deg} {wind.speed} m/s</span>
        </td>
        <td>
          <span>{main.humidity}%</span>
        </td>
      </tr>
    );
  };

  createView = forecast => {
    const forecastList = forecast.list;


    return (
      <table>
        <tbody>
          {forecastList.map((forecast, index) => this.createForecastRow(forecast, index))}
        </tbody>
      </table>
    )
  };

  render() {
    return (
      <div>
        {this.createView(this.props.forecast)}
      </div>
    );
  };
};
