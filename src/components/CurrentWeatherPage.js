import React from "react";
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
    const forecastArray = this.props.forecast;
    if (forecastArray < 5) {
      return forecastArray.map(forecast => forecast.name);
    } else {
      return forecastArray.slice(-5).map(forecast => forecast.name);
    }
  };

  getLastSearchForecast = () => {
    return this.props.forecast.filter(
      forecast => forecast.name === this.props.lastSearch
    )[0];
  };

  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <SearchForm onSubmit={this.onFormSubmit} />
        {this.props.forecast.length > 0 ? (
          <RecentSearch
            queryList={this.queryList()}
            onClick={this.onCityNameClick}
          />
        ) : (
          ""
        )}
        {this.props.forecast.length > 0 ? (
          <CityForecast {...this.getLastSearchForecast()} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lastSearch: state.lastSearch,
  forecast: state.forecast
});

const mapDispatchToProps = dispatch => ({
  startAddForecast: cityName => dispatch(startAddForecast(cityName)),
  setCityForecast: cityName => dispatch(setCityForecast(cityName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeatherPage);
