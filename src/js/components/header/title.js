import React from "react";

export default class Title extends React.Component {
  render() {
    return(
      <h2>{this.props.title}</h2>
    );
  }
}
