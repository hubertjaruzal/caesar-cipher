import React from "react";

import Header from "./header.js";

export default class Layout extends React.Component {
  render() {
    return(
      <section class="main__container">
        <section class="image__container">
        </section>
        <section class="text__container">
          <Header />
          { this.props.children }
        </section>
      </section>
    );
  }
}
