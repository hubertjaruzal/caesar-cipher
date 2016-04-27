import React from "react";

import { Link } from "react-router";

export default class Header extends React.Component {
  render() {
    const navStyle = {
      listStyleType: "none"
    };
    const itemStyle = {
      textDecoration: "none",
      fontSize: "15px",
      color: "black"
    }


    return(
      <nav class="nav">
        <ul style={navStyle}>
          <li><Link to="cipher" activeClassName="active" style={itemStyle}>Cipher</Link></li>
          <li><Link to="about" activeClassName="active" style={itemStyle}>About</Link></li>
        </ul>
      </nav>
    );
  }
}
