import React from "react";

const SearchForm = () => (
  <form className="search-form">
    <input 
      className="search-form__input"
      type="text"
      autoFocus
      placeholder="Enter city name"
    />
    <input 
      className="search-form__submit-btn"
      type="submit"
      value="Search"
    />
  </form>
);

export default SearchForm;