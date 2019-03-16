import React from "react";
import { connect } from "react-redux";
import { startAddForecast } from "../actions/forecast";
import SearchForm from "../components/SearchForm";
import CityForecast from "./CityForecast";

class CurrentWeatherPage extends React.Component {
  onSubmit = cityName => {
    this.props.startAddForecast(cityName);
  };

  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <SearchForm onSubmit={this.onSubmit} />
        {this.props.forecast.length > 0 ? (
          <CityForecast {...this.props.forecast.slice(-1)[0]} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  forecast: state.forecast
});

const mapDispatchToProps = dispatch => ({
  startAddForecast: cityName => dispatch(startAddForecast(cityName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeatherPage);
