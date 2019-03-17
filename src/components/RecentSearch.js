import React from "react";

export default class RecentSearch extends React.Component {
  onClick = e => {
    e.preventDefault();
    this.props.onClick(e.target.textContent)
  }
  
  render () {
    return (
      <div>
        <span>Recent forecast in: </span>
        <div onClick={this.onClick}>
        {
          this.props.queryList.map((query, index) => (<span key={index}>{query}</span>))
        }
        </div>
      </div>
    );
  };
};