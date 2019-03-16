import React from "react";
import { connect } from "react-redux";
export class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: ""
    };
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.cityName);
  };

  onSearchValueChange = e => {
    const cityName = e.target.value;
    this.setState(() => ({ cityName }));
  };
  
  render() {
    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <input 
          className="search-form__input"
          type="text"
          autoFocus
          placeholder="Enter city name"
          value={this.state.cityName}
          onChange={this.onSearchValueChange}
        />
        <input 
          className="search-form__submit-btn"
          type="submit"
          value="Search"
        />
        {this.props.searchError && <p className="form__error">{this.props.searchError}</p>}
      </form>
    );
  }
};

const mapStateToProps = state => ({
  searchError: state.searchError
});

export default connect(mapStateToProps)(SearchForm);