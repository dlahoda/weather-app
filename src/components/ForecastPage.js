import React from "react";
import { connect } from "react-redux";
import { startGetExtendedForecast } from "../actions/forecast";
import ExtendedForecast from "./ExtendedForecast";

export class ForecastPage extends React.Component {
  componentDidMount() {
    this.props.startGetExtendedForecast(this.props.match.params.city);
  }

  render() {
    return (
      <div className="app-container">
        <div className="forecast-page">
        {this.props.extendedForecast && (
          <ExtendedForecast forecast={this.props.extendedForecast} />
          )}
          <a className="link" onClick={this.props.history.goBack}>Go back</a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  extendedForecast: state.forecastList.find(
    forecastDay => forecastDay.location.name === props.match.params.city
  )
});

const mapDispatchToProps = dispatch => ({
  startGetExtendedForecast: cityName =>
    dispatch(startGetExtendedForecast(cityName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForecastPage);
