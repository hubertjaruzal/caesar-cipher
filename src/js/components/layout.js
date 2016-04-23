import React from "react";

import Header from "./header.js";

export default class Layout extends React.Component {
  render() {
    return(
      <section>
        <Header />
        { this.props.children }
      </section>
    );
  }
}
