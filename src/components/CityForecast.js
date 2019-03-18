import React from "react";
export default class CityForecast extends React.Component {
  render() {
    return (
      <div className="city-forecast">
        <div className="content-container">
          <h2 className="city-forecast__city-name">
            {this.props.location.name}
          </h2>
          <h1 className="city-forecast__temperature">
            {Math.trunc(this.props.current.temp_c)}&deg;C
          </h1>
          <div className="city-forecast__condition condition">
            <img
              className="condition__img"
              src={this.props.current.condition.icon}
            />
            <p className="condition__text">
              {this.props.current.condition.text}
            </p>
          </div>

          <div className="city-forecast__data data">
            <div className="data__box">
              <img className="data__img" src="/images/svg/wind-flag.svg"/>
              <div className="data__text">wind</div>
              <div className="data__value">
                {this.props.current.wind_kph} km/h
              </div>
            </div>
            <div className="data__box">
              <img className="data__img" src="/images/svg/meter.svg" />
              <div className="data__text">pressure</div>
              <div className="data__value">
                {this.props.current.pressure_mb} mb
              </div>
            </div>
            <div className="data__box">
              <img className="data__img" src="/images/svg/water-drop.svg" />
              <div className="data__text">humidity</div>
              <div className="data__value">{this.props.current.humidity} %</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
