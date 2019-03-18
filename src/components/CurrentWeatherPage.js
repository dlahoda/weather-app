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
      forecast => forecast.location.name === this.props.lastSearch
    )[0];
  };

  render() {
    return (
      <div>
        <h1>Weather App</h1>
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
            <Link to={`/forecast/${this.props.lastSearch}`} >Forecast</Link>
          </div>
        )}
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
