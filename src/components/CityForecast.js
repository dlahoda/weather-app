import React from "react";
export default class CityForecast extends React.Component {
  render() {
    return (
      <div>
        <h2 className="weather__city-name">
          Weather in {this.props.location.name}, {this.props.location.country}
        </h2>
        <div className="weather__temperature">
          <div className="weather__condition">
            <img src={this.props.current.condition.icon} />
            <p>{this.props.current.condition.text}</p>
          </div>
          <h3>{this.props.current.temp_c} &#8451;</h3>
        </div>
        <table className="weather__data">
          <tbody>
            <tr>
              <td>Wind</td>
              <td>
                {this.props.current.wind_kph} k/h, {this.props.current.wind_dir}
              </td>
            </tr>
            <tr>
              <td>Cloudiness</td>
              <td>{this.props.current.cloud}%</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>{this.props.current.pressure_mb} mb</td>
            </tr>
            <tr>
              <td>Humidity</td>
              <td>{this.props.current.humidity}%</td>
            </tr>
          </tbody>
        </table>
        
      </div>
    );
  };
};