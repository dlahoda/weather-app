import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startAddForecast, setCityForecast } from "../actions/currentWeather";
import SearchForm from "../components/SearchForm";
import RecentSearch from "../components/RecentSearch";
import CityForecast from "./CityForecast";

class CurrentWeatherPage extends React.Component {
  onFormSubmit = cityName => {
    this.props.startAddForecast(cityName);
  };

  onCityNameClick = cityName => {
    this.props.setCityForecast(cityName);
  };

  queryList = () => {
    const cityNamesArray = this.props.currentWeatherList.map(forecast => forecast.location.name);
    
    if (cityNamesArray < 5) {
      return cityNamesArray;
    } else {
      return cityNamesArray.slice(-5);
    }
  };

  getLastSearchForecast = () => {
    return this.props.currentWeatherList.filter(
      forecast => forecast.location.name.toLowerCase() === this.props.lastSearch.toLowerCase()
    )[0];
  };

  render() {
    return (
      <div className="app-container">
        <div className="current-weather">
          <h2 className="current-weather__title content-container">Weather App</h2>
          <SearchForm onSubmit={this.onFormSubmit} />
          {this.props.currentWeatherList.length > 0 && (
            <RecentSearch
              queryList={this.queryList()}
              onClick={this.onCityNameClick}
            />
          )}
          {this.props.currentWeatherList.length > 0 && (
            <div>
              <CityForecast {...this.getLastSearchForecast()} />
              <Link className="link" to={`/forecast/${this.props.lastSearch}`} >Forecast &#10095;</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lastSearch: state.currentWeather.lastSearch,
  currentWeatherList: state.currentWeather.currentWeatherList
});

const mapDispatchToProps = dispatch => ({
  startAddForecast: cityName => dispatch(startAddForecast(cityName)),
  setCityForecast: cityName => dispatch(setCityForecast(cityName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeatherPage);
