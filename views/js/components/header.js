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
          <li><Link to="decryption" activeClassName="active" style={itemStyle}>Decryption</Link></li>
          <li><Link to="encryption" activeClassName="active" style={itemStyle}>Encryption</Link></li>
          <li><Link to="about" activeClassName="active" style={itemStyle}>About Cipher</Link></li>
        </ul>
      </nav>
    );
  }
}
