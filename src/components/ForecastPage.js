import React from "react";
import {connect} from "react-redux";

export class ForecastPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Weather and forecast in {this.props.match.params.city}</h2>
        <a onClick={this.props.history.goBack}>Go back</a>
      </div>
    );
  };
};

// const mapStateToProps = state => ({
//   extendedForecast: 
// });

export default connect()(ForecastPage);