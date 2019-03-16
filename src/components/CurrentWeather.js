import React from "react";
// Temp data
import * as data from "../temp/london.json";

const cityData = data.default;

const CurrentWeather = () => (
  <div>
    <h2 
      className="weather__city-name"
    >
      Weather in {cityData.name}, {cityData.sys.country}
    </h2>
    <div className="weather__temperature">
      {cityData.weather.map((element, index) => (
        <div key={index} className="weather__condition">
          <img
            src={`http://openweathermap.org/img/w/${element.icon}.png`}
          />
          <p>{element.main}</p>
        </div>
      ))}
      <h3>{cityData.main.temp} &#8451;</h3>
    </div>
    <table className="weather__data">
      <tbody>
      
        <tr>
          <td>Wind</td>
          <td>{cityData.wind.speed} m/s, {cityData.wind.deg} degrees</td>
        </tr>
        <tr>
          <td>Cloudiness</td>
          <td>{cityData.clouds.all}%</td>
        </tr>
        <tr>
          <td>Pressure</td>
          <td>{cityData.main.pressure} hPa</td>
        </tr>
        <tr>
          <td>Humidity</td>
          <td>{cityData.main.humidity}%</td>
        </tr>
        <tr>
          <td>Sunrise</td>
          <td>{cityData.sys.sunrise}</td>
        </tr>
        <tr>
          <td>Sunset</td>
          <td>{cityData.sys.sunset}</td>
        </tr>
        <tr>
          <td>Geo coords</td>
          <td>[{cityData.coord.lat}, {cityData.coord.lon}]</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CurrentWeather;

<img
        src={`http://openweathermap.org/img/w/09d.png`}
      />