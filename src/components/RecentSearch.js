import React from "react";

export default class RecentSearch extends React.Component {
  onClick = e => {
    e.preventDefault();
    if (e.target.tagName === "SPAN") {
      this.props.onClick(e.target.textContent);
    }
  };

  render() {
    return (
      <div className="recent-forecast content-container">
        <h5 className="recent-forecast__title">Saved forecast: </h5>
        <div className="recent-forecast__city-box" onClick={this.onClick}>
          {this.props.queryList.map((query, index) => (
            <span className="recent-forecast__city-name" key={index}>
              {query}
            </span>
          ))}
        </div>
      </div>
    );
  }
}
