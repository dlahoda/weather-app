import React from "react";

export default class CityForecast extends React.Component {
  createWeatherConditionsBlock = () => {
    return this.props.weather.map((element, index) => (
      <div key={index} className="weather__condition">
        <img src={`http://openweathermap.org/img/w/${element.icon}.png`} />
        <p>{element.main}</p>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <h2 className="weather__city-name">
          Weather in {this.props.name}, {this.props.sys.country}
        </h2>
        <div className="weather__temperature">
          {this.createWeatherConditionsBlock()}
          <h3>{this.props.main.temp} &#8451;</h3>
        </div>
        <table className="weather__data">
          <tbody>
            <tr>
              <td>Wind</td>
              <td>
                {this.props.wind.speed} m/s, {this.props.wind.deg} degrees
              </td>
            </tr>
            <tr>
              <td>Cloudiness</td>
              <td>{this.props.clouds.all}%</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>{this.props.main.pressure} hPa</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td>{this.props.main.humidity}%</td>
            </tr>
            <tr>
              <td>Sunrise</td>
              <td>{this.props.sys.sunrise}</td>
            </tr>
            <tr>
              <td>Sunset</td>
              <td>{this.props.sys.sunset}</td>
            </tr>
            <tr>
              <td>Geo coords</td>
              <td>
                [{this.props.coord.lat}, {this.props.coord.lon}]
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
